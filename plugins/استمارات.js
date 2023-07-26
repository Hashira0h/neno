let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat] 
     if (/^menu$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `*◜🕷╎sρiɒєя◈◞*\n*❆──━━┈ ⊰⟐⊱ ┈━━──❆*
*⇇اســتمارات ســبــايــدر⇉*
*❋ ⋅ ┈─━ •◞❊◜• ━─┈ ⋅ ❋*
*⟐001⇇اســــتــمــارة📄*
*⟐002⇇اســتمارة خبر📮*
*⟐003⇇اســتمارة كورة⚽️*
*⟐004⇇وصف فرع نشر📜*
*⟐005⇇اســتمارة صــور🪐*
*⟐006⇇خــاتــمــة صــور🪐*
*⟐007⇇اسـتمارة ملصقات🎭*
*⟐008⇇خــاتــمه مــلصقات🎭*
*⟐009⇇حــــقــوق🎭*
*⟐010⇇وصــف فــرع📃*
*⟐011⇇وصــف نــقابه🧾*
*❋ ⋅ ┈─━ •◞❊◜• ━─┈ ⋅ ❋*
*⟐⇇تقدر تطلب الاستمارة بالرقم وبالأسم⇉*
*❆──━━┈ ⊰⟐⊱ ┈━━──❆*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

} 
    if (/^استمارة خبر|001$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `*◜🕷╎sρiɒєя◈◞*
*❋ ⋅ ┈─━━─┈📮┈─━━─┈ ⋅ ❋*

*❋ ⋅ ┈─━━─┈📮┈─━━─┈ ⋅ ❋*
*◜sρiɒєя𓆩📮𓆪иєωs◞*`,

} 
  if (/^استمارة كوره|003$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `*◜🕷╎sρiɒєя◈◞*
*❋ ⋅ ┈───┈⚽️┈───┈ ⋅ ❋*

*❋ ⋅ ┈───┈⚽️┈───┈ ⋅ ❋*
*◜sρiɒєя𓆩⚽𓆪sρσяτs◞*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}
  if (/^وصف فرع نشر|004$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `*◈ ═══【🕷展開する🕷】═══ ◈*

*◝👑◟╎الــمؤسس↜⌟viиi⌜*

*◈ ════【❖】════ ◈*

*❶┊ممنوع نشر اشياء تغضب الله*

*❷┊ممنوع نشر رابط واحد خمس مرات مره واحده*

*❸┊ممنوع انشاء محادثه*

*❹┊ممنوع الذهاب للاعضاء في الخاص*

*❺┊ممنوع السبام*

*◈ ════【❖】════ ◈*

*✧┇⬩⊰رابط الفرع🖇⊱⬩↓*
``````
*◈ ════【❖】════ `, m) //wm, null, [['Menu', '#menu']], m) botones :V

} 
  if (/^استمارة صور|005$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `*◜🕷╎sρiɒєя◈◞*
*❆──━━┈ ⊰🪐⊱ ┈━━──❆*

❐الطــــالـب📧⇇❮  ❯ 
*❋• ┈─━ ◞🕷◜ ━─┈ •❋*

❐الطـــلــب📦⇇❮  ❯ 
*❋• ┈─━ ◞🕷◜ ━─┈ •❋*
*◜sρiɒ`, m) //wm, null, [['Menu', '#menu']], m) botones :V

} 
  if (/^خاتمة صور$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `*❆──━━┈ ⊰🪐🔏⊱ ┈━━──❆*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

} 
  if (/^🗿$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `وجهك مصطح وش بيك 🤔`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}
   if (/^ليش$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `لانك بنوته`, m) //wm, null, [['Menu', '#menu']], m) botones :V

} 
   if (/^انا جيت$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `ويلكم باك يا اصطوره`, m) //wm, null, [['Menu', '#menu']], m) botones :V

} 
   if (/^بتزوجك$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `اكبر اول`, m) //wm, null, [['Menu', '#menu']], m) botones :V

} 
 if (/^نلعب$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `لعب للاطفال`, m) //wm, null, [['Menu', '#menu']], m) botones :V

} 
 if (/^همم$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `همم`, m) //wm, null, [['Menu', '#menu']], m) botones :V

} 
 if (/^احا$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `اوه قويه`, m) //wm, null, [['Menu', '#menu']], m) botones :V

} 
if (/^هلا$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `هلوات`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}
if (/^ا$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `اكتب a `, m) //wm, null, [['Menu', '#menu']], m) botones :V

}

if (/^الحمد لله$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, ` دوم يا رب، ايش تسوي؟ `, m) //wm, null, [['Menu', '#menu']], m) botones :V

}

if (/^يوي$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, ` ماذا ؟ `, m) //wm, null, [['Menu', '#menu']], m) botones :V

}

if (/^لا شيء و انت$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, ` اكلمك, `, m) //wm, null, [['Menu', '#menu']], m) botones :V

}

if (/^مم$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat,teks, m ` منورة بوند`, hi) //wm, null, [['Menu', '#menu']], m) botones :V

}

if (/^بوت زق$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, ` زق في عينك يا وجه البيضة`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}

if (/^حرامي$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `تتهم بريء بالسرقة
من دون تحري او بحث
عن حقيقة ليست ملموسة
ارحنا واعمل شرطي 
ثم افتح فمك وثرثر
فكلامك كـ الجهل واحد 
بل جهلاً ارحم من حديثك
تتصنع دور الشرطي 
وكأنك محقق
بالله اصمت ولا تحرج نفسك 
ارحنا وارح أعصابك 
ان اكرمك الله بعقل
فبسكوتك اقتل جهلك
`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}


if (/^ملل$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, ` نعرف فا اسكت `, m) //wm, null, [['Menu', '#menu']], m) botones :V

}

if (/^السلام عليكم$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, ` وعليكم السلام `, m) //wm, null, [['Menu', '#menu']], m) botones :V

}

if (/^تصبح على خير/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, ` و انت بخير حبيبي `, m) //wm, null, [['Menu', '#menu']], m) botones :V

} 

if (/^احبك$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, ` اكثر `, m) //wm, null, [['Menu', '#menu']], m) botones :V

}
   
if (/^كل زق$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `مااكلك`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}

if (/^كيفك|كيفيك$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, ` الحمد لله و انت`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}

if (/^تست$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `كملووو`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}

if (/^تبا لك$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `ولك بالمثل`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}
return !0 }
export default handler
