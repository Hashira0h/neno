let handler = m => m; 
  
 handler.all = async function (m) { 
   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^menu$/i.test(m.text)) { 
     responses = [ 
'*◜🕷╎sρiɒєя◈◞*\n*❆──━━┈ ⊰⟐⊱ ┈━━──❆*
*⇇اســتمارات ســبــايــدر⇉*
*❋ ⋅ ┈─━ •◞❊◜• ━─┈ ⋅ ❋*
*⟐1⇇اســــتــمــارة📄*\n*⟐2⇇اســتمارة خبر📮*
*⟐3⇇اســتمارة كورة⚽️*
*⟐4⇇وصف فرع نشر📜*
*⟐5⇇اســتمارة صــور🪐*
*⟐6⇇خــاتــمــة صــور🪐*
*⟐7⇇اسـتمارة ملصقات🎭*
*⟐8⇇خــاتــمه مــلصقات🎭*
*⟐9⇇حــــقــوق🎭*
*⟐10⇇وصــف فــرع📃*
*⟐11⇇وصــف نــقابه🧾*
*❋ ⋅ ┈─━ •◞❊◜• ━─┈ ⋅ ❋*
*⟐⇇تقدر تطلب الاستمارة بالرقم وبالأسم⇉*
*❆──━━┈ ⊰⟐⊱ ┈━━──❆*',

    ];
   }else if (/^$/i.test(m.text)) { 
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
