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
  if (/^006|خاتمة صور$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `*❆──━━┈ ⊰🪐🔏⊱ ┈━━──❆*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

} 
  if (/^007|استمارة ملصقات$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `*◜🕷╎sρiɒєя◈◞*
*❆──━━┈ ⊰🎭⊱ ┈━━──❆*

❐الطــــالـب📧⇇❮  ❯ 
*❋• ┈─━ ◞🕷◜ ━─┈ •❋*

❐الطـــلــب📦⇇❮  ❯ 
*❋• ┈─━ ◞🕷◜ ━─┈ •❋*
*◜sρiɒєя𓆩🎭𓆪sτicĸєяs◞* 🤔`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}
   if (/^008|خاتمة ملصقات$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `*❆──━━┈ ⊰🎭🔏⊱ ┈━━──❆*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

} 
   if (/^حقوق ارثر$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `⚜╎sρiɒєя‹🎭›αяτнυя╎⚜`, m) //wm, null, [['Menu', '#menu']], m) botones :V

} 
   if (/^حقوق فيني$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `⚜╎sρiɒєя‹🎭›viиi╎⚜`, m) //wm, null, [['Menu', '#menu']], m) botones :V

} 
 if (/^009|حقوق$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `⚜╎sρiɒєя‹🎭›╎⚜`, m) //wm, null, [['Menu', '#menu']], m) botones :V

} 
 if (/^وصف فرع$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `*◜sρiɒєя𓆩𓆪◞*
*❆━•✠•━━•﹝🕷﹞•━━•✠•━❆*
*♚᚛|الـمسؤول🎖↜˼‏˹*
*❋• ┈─━ •◞🕷◜• ━─┈ •❋*
*◈┇↓✨*

*❶〕*
*❷〕*
*❸〕*
*❹〕*
*❋• ┈─━ •◞🕷◜• ━─┈ •❋*
 *◈┇رابط الفرع↓🔗*

``````
*❆━•✠•━━•﹝🕷﹞•━━•✠•━❆*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

} 
 if (/^حقوق جيو$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `⚜╎sρiɒєя‹🎭›ɢyυ╎⚜`, m) //wm, null, [['Menu', '#menu']], m) botones :V

 }
return !0 }
export default handler
