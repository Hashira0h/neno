; 
  
 handler.all = async function (m) { 
   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^تست$/i.test(m.text)) { 
     responses = [ 
'*كملووو*',  
'*تستو*',  
'*تست*',  
'*توصت*',  
'*طشط*',   
     ]; 
} else if (/^نينو ترحيب$/i.test(m.text)) { 
     responses = [ 
'*لو علمت الدار بمن جائها*\n*انارت جميع انوارها*\n*فرحة بصديق جديد*\n*ينير لها الحياه*\n*نورتنا في نقابتنا*\n*نتمنى أن تكون خير لنا وللجميع🤍*', 
     ]; 
   }else if (/^ايموجيات$/i.test(m.text)) { 
     responses = [ 
'*⁅ روبوت ⁆*',  
'*⁅ عين ⁆*',  
'*⁅ شرطي ⁆*',  
'*⁅ معلم ⁆*',
'*⁅ مبرمج ⁆*',
'*⁅ نجمه ⁆*',
'*⁅ نودلز ⁆*',
'*⁅ حصان ⁆*',
'*⁅ قرد ⁆*',
'*⁅ قنفذ سينسي ⁆*',
'*⁅ بطريق ⁆*',
'*⁅ شجره ⁆*',
'*⁅ عنكبوت ⁆*',
'*⁅ ثلج ⁆*',
'*⁅ بنك ⁆*',
'*⁅ مستشفى ⁆*',
'*⁅ بركان ⁆*',
]; 

    }  
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 
  
 export default handler;

