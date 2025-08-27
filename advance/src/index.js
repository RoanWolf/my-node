import express from 'express'
import fs from 'node:fs'
import nodemailer from 'nodemailer'
import yaml from 'js-yaml'

// 加载邮件配置
const mailConfig = yaml.load(fs.readFileSync('./config/mail.yaml', 'utf8'))

// 创建 transporter
const transPort = nodemailer.createTransport({
    service: "qq",
    port: 587,
    host: 'smtp.qq.com',
    secure: true,
    auth: {
        pass: mailConfig.pass,
        user: mailConfig.user
    }
})

// 创建 Express 应用
const app = express()

// 中间件：解析 JSON 请求体
app.use(express.json())



// 路由：发送邮件
app.post('/send/mail', async (req, res) => {
    try {
        const { to, subject, text } = req.body
        
        await transPort.sendMail({
            to,
            from: mailConfig.user,
            subject,
            text
        })
        
        res.send('ok')
    } catch (error) {
        console.error('发送邮件失败:', error)
        res.status(500).send('邮件发送失败')
    }
})

// 启动服务器
app.listen(3000, () => {
    console.log('服务器运行在端口 3000')
})