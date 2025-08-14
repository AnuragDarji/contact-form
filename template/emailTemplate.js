function contactEmailTemplate({ name, email, message }) {
  return `
  <div style="font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%); padding: 40px 0;">
    <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08); overflow: hidden;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">✉️ New Message Received</h1>
      </div>
      
      <div style="padding: 30px;">
        <div style="display: flex; align-items: center; margin-bottom: 25px;">
          <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
            <span style="color: white; font-size: 20px; display: block; width: 100%; text-align: center;">${name.charAt(0).toUpperCase()}</span>
          </div>
          <div>
            <h3 style="margin: 0 0 5px 0; color: #333; font-size: 18px;">${name}</h3>
            <p style="margin: 0; color: #666; font-size: 14px;">${email}</p>
          </div>
        </div>
        
        <div style="background: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 25px; border-left: 4px solid #667eea;">
          <p style="margin: 0; color: #555; line-height: 1.6; font-size: 16px;">${message}</p>
        </div>
        
        <div style="text-align: center; margin-top: 30px;">
          <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 25px; border-radius: 30px; text-decoration: none; font-weight: 500; font-size: 14px; transition: all 0.3s ease;">Reply to ${name.split(' ')[0]}</a>
        </div>
      </div>
      
      <div style="background: #f8f9fa; padding: 20px; text-align: center; font-size: 12px; color: #888;">
        <p style="margin: 0;">This message was sent from your portfolio contact form</p>
        <p style="margin: 10px 0 0 0;">© ${new Date().getFullYear()} Your Portfolio. All rights reserved.</p>
      </div>
    </div>
  </div>
  `;
}

module.exports = contactEmailTemplate;