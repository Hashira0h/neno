let handler = m => m; 
  
 handler.all = async function (m) { 
   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^نينو اكرهك$/i.test(m.text)) { 
     responses = [ 
'*بس بس انا احبك😢*\n*ليش بتكسر بخاطري😥*',
'*كنت احبك وانت كسرتني ماتستهال تنحب😔💔*',  
     ]; 
} else if (/^نينو انتي انسان$/i.test(m.text)) { 
     responses = [ 
'*لا حيوان، من فين بتفكر بالله🙂*',  
'*انا روبوت يعيش ويتعايش*',   
     ]; 
   }else if (/^نينو قولي منور$/i.test(m.text)) { 
     responses = [ 
'*منور*',  
     ]; 
   }else if (/^نينو قولي منوره$/i.test(m.text)) { 
     responses = [ 
'*منوره*',  
     ];
 }else if (/^جيت$/i.test(m.text)) { 
     responses = [ 
'*نورت من جديد*',  
     ]; 
   }else if (/^بروح$/i.test(m.text)) { 
     responses = [ 
'*بالتوفيق*',
]; 
   }else if (/^نينو تأسفي$/i.test(m.text)) { 
     responses = [ 
'*اسفه اني حرقت دمك المره الجايه بحرقك عالخفيف😝*',
'*بتأسف بس لما يجف المحيط الأطلنطي😏*',  
  ]; 
   }else if (/^نينو اشكري$/i.test(m.text)) { 
     responses = [ 
'*شكراا، بدونك ماندري شو كنا بنسوي😊*',  
     ]; 
   }else if (/^نينو طفش$/i.test(m.text)) { 
     responses = [ 
'*اي بروح انام🚶‍♀️*',  
'*تفاعلكم بيض شدو شوي😒*',  
];
   }else if (/^نينو كيف التفاعل$/i.test(m.text)) { 
     responses = [ 
'*ماعجبني شدو حيلكو اكثرر👀*', 
'*امم التفاعل يضحك نبغى تفاعل اكبر😶*',  
'*بيض شدو اكثر🫠*',    
     ]; 
   }else if (/^نينو مين مزعلك؟$/i.test(m.text)) { 
     responses = [ 
'*الكل خلوني ابكي😭*', 
     ]; 
   }else if (/^نينو انتي غبيه|نينو انتي غبية$/i.test(m.text)) { 
     responses = [ 
'*😢ليش تكسر بخاطر*', 
'*زعلتني، بكرهك😢*',  
'*على اساس انك الي نابغة😒*',
     ]; 
   }else if (/^نينو سلكي له$/i.test(m.text)) { 
     responses = [ 
'*🤣🤣🤣🤣هههه*',
     ]; 
   }else if (/^نينو حفله|نينو حفلة$/i.test(m.text)) { 
     responses = [ 
'*ايوااا💃*', 
'*بولعهااا💃🎶*',
     ]; 
   }else if (/^نينو مليتي؟$/i.test(m.text)) { 
     responses = [ 
'*اي بروح انام🥱*', 
'*لا الوقت لسه طويل*',
     ]; 
   }else if (/^نينو ابي فلوس$/i.test(m.text)) { 
     responses = [ 
'*اهنئك جيت للشخص الغلط🙂*', 
'*شايفني جالسه على بنك👀*',
     ]; 
   }else if (/^نينو فينك؟$/i.test(m.text)) { 
     responses = [ 
'*في المريخ فين بروح يعني👀*', 
'*هون هون ماطرت*',
     ]; 
   }else if (/^السلام عليكم$/i.test(m.text)) { 
     responses = [ 
'*وعليكم السلام ورحمة الله وبركاته*',
     ];
   }else if (/^نينو ابكي$/i.test(m.text)) { 
     responses = [ 
'*😭😭😭😭😭😭😭😭😭*',
     ];
   }else if (/^نينو تعال هواش$/i.test(m.text)) { 
     responses = [ 
'*احنا مع مين؟👀🔪*',
     ];
   }else if (/^الامر$/i.test(m.text)) { 
     responses = [ 
'', 
'',  
'',  
'',  
'' 
     ];
   }else if (/^الامر$/i.test(m.text)) { 
     responses = [ 
'', 
'',  
'',  
'',  
'' 
     ];
   }else if (/^الامر$/i.test(m.text)) { 
     responses = [ 
'', 
'',  
'',  
'',  
'' 
     ];
   }else if (/^الامر$/i.test(m.text)) { 
     responses = [ 
'', 
'',  
'',  
'',  
'' 
     ];
   }else if (/^الامر$/i.test(m.text)) { 
     responses = [ 
'', 
'',  
'',  
'',  
'' 
     ];
    }  
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 
  
 export default handler;
