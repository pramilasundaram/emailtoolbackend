const nodemailer = require("nodemailer");

const sendemail=(req,res)=>{
 console.log(req.body);
  res.json(req.body)
 const {username,email,subject,message} =req.body
 const emails=email.split(",")
console.log(emails)
const transporter = nodemailer.createTransport({
  service:"gmail",
  auth: {    
    user: 'pramilasundaram8@gmail.com',
    pass: 'ritgictwxnelhnvd'
  }
});
const template=`<body style="background-color:grey">
	<table align="center" border="0" cellpadding="0" cellspacing="0"
		width="550" bgcolor="white" style="border:2px solid black">
		<tbody>
			<tr>
				<td align="center">
					<table align="center" border="0" cellpadding="0"
						cellspacing="0" class="col-550" width="550">
						<tbody>
							<tr>
								<td align="center" style="background-color:white;
										height: 50px;">

									<a href="#" style="text-decoration: none;">
										<p style="color:white;
												font-weight:bold;">
											<h2>FREE BULK EMAIL TOOL</h2>
										</p>
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
			<tr style="height: 300px;">
				<td align="center" style="border: none;
						border-bottom: 2px solid #4cb96b;
						padding-right: 20px;padding-left:20px">

					<p style="font-weight: bolder;font-size: 42px;
							letter-spacing: 0.025em;
							color:black;">
						hello,
						<br> ${message}            
					</p>
				</td>
			</tr>

			<tr style="display: inline-block;">
				<td style="height: 150px;
						padding: 20px;
						border: none;
						border-bottom: 2px solid #361B0E;
						background-color: white;">
					
					<h2 style="text-align: left;
							align-items: center;">
						Thanks and Regards</h2>
            <p>${username}<br>villupuram</p>							
					
				</td>
			</tr>
		</tbody>
	</table>
</body>
`

async function main() {  
  const info = await transporter.sendMail({
    from: '"pramila sundaram👻" <pramilasundaram8@gmail.com>', 
    to: emails,
    subject: `${subject}`,   
    html: template, 
  });
  console.log("Message sent: %s", info.messageId);
}
main().catch(console.error);
};
module.exports= {sendemail};