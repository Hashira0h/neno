let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat] 
     if (/^نشر$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, '*❋• ┈─━ ◞🌩◜ ━─┈ •❋*\n*نرحب بكم في استقبال*\n*◜元 ⊰🌩⊱‏Мαиji◞*\n*❋• ┈─━ ◞🌩◜ ━─┈ •❋*\n\n*◞⟐╎اعضاء متفاعلين🔥◜*\n*◞⟐╎بنك ومتجر فخمين🏦◜*\n*◞⟐╎مسابقات وفعاليات🏀◜*\n*◞⟐╎قوانين عادلة📜◜*\n*◞⟐╎سوالف ونقاشات🎭◜*\n*◞⟐╎بوت سوالف وبوت مطور🤖◜*\n*◞⟐╎مشرفين ذو خبرة🎖◜*\n*◞⟐╎اذا صنم لا تجي🗿◜*\n*❋• ┈─━ ◞🌩◜ ━─┈ •❋*\n*●᚛|الاستقبال↯*\n```https://chat.whatsapp.com/BYcNmfA9dbzDddTFrsAdoc```\n*●᚛|من طرف↯*\n〘•⊰⊱•〙\n*❋• ┈─━ ◞🌩◜ ━─┈ •❋', m) //wm, null, [['Menu', '#menu']], m) botones :V

} 
    if (/^اوامر$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `*~⌝˼‏ادارة⊰🌩⊱Мαиji˹⌞~*\n*⎔ ⋅ ───━ •﹝🌩﹞• ━─── ⋅ ⎔*\n*●↯┊🎮الــاوامـــــر🎮┊↯●*\n*❆━━━ ─ • ❪🌩❫ • ─ ━━━❆*\n*⧉⇇ترحيب⇉*\n*‏❅ ━ ── • 🌩 • ── ━ ❅*\n*⧉⇇نشر⇉*\n*‏❅ ━ ── • 🌩 • ── ━ ❅*\n*⧉⇇منوع⇉*\n*‏❅ ━ ── • 🌩 • ── ━ ❅*\n*⧉⇇فعالية القلوب⇉*\n*‏❅ ━ ── • 🌩 • ── ━ ❅*\n*⧉⇇فعالية صناديق الحظ⇉*\n*‏❅ ━ ── • 🌩 • ── ━ ❅*\n*⧉⇇طرد مؤبد⇉*\n*‏❅ ━ ── • 🌩 • ── ━ ❅*\n*⧉⇇فعالية الروليت⇉*\n*‏❅ ━ ── • 🌩 • ── ━ ❅*\n*⧉⇇فعالية كرة القدم⇉*\n*‏❅ ━ ── • 🌩 • ── ━ ❅*\n*⧉⇇فعالية الهاشيرا⇉*\n*‏❅ ━ ── • 🌩 • ── ━ ❅*\n*⧉⇇فعالية ديث نوت⇉*\n*‏❅ ━ ── • 🌩 • ── ━ ❅*\n*⧉⇇فعالية الزومبي⇉*\n*‏❅ ━ ── • 🌩 • ── ━ ❅*\n*⧉⇇فعالية الباتل رويال⇉*\n*‏❅ ━ ── • 🌩 • ── ━ ❅*\n*⧉⇇فعالية الايموجي⇉*\n*‏❅ ━ ── • 🌩 • ── ━ ❅*\n*⧉⇇فعالية شد الحبل⇉*\n*‏❅ ━ ── • 🌩 • ── ━ ❅*\n*⧉⇇سؤال مفاجئ⇉*\n*‏❅ ━ ── • 🌩 • ── ━ ❅*\n*⧉⇇اعلان ترقية⇉*\n*‏❅ ━ ── • 🌩 • ── ━ ❅*\n*⧉⇇فعالية الاصوات⇉*\n*‏❅ ━ ── • 🌩 • ── ━ ❅*\n*⧉⇇فعالية الروليت⇉*\n*‏❅ ━ ── • 🌩 • ── ━ ❅*\n*⧉⇇فعالية كرة القدم⇉*\n*‏❅ ━ ── • 🌩 • ── ━ ❅*\n*⧉⇇فعالية الهوكاجي⇉*\n*‏❅ ━ ── • 🌩 • ── ━ ❅*\n*⧉⇇فعالية مصاص الدماء⇉*\n*‏❅ ━ ── • 🌩 • ── ━ ❅*\n*⧉⇇انذار⇉*\n*‏❅ ━ ── • 🌩 • ── ━ ❅*\n*⧉⇇تحويل⇉*\n*‏❅ ━ ── • 🌩 • ── ━ ❅*\n*⧉⇇طرد تأديبي⇉*\n*‏❅ ━ ── • 🌩 • ── ━ ❅*\n*⧉⇇ملوك الاسبوع⇉*\n*‏❅ ━ ── • 🌩 • ── ━ ❅*\n*⧉⇇تنازل⇉*\n*‏❅ ━ ── • 🌩 • ── ━ ❅*\n*⧉⇇اعفاء⇉*\n*‏❅ ━ ── • 🌩 • ── ━ ❅*\n*⧉⇇مقولات⇉*\n*‏❅ ━ ── • 🌩 • ── ━ ❅*\n*⧉⇇فعالية الابراج⇉*\n*‏❅ ━ ── • 🌩 • ── ━ ❅*\n*⧉⇇شراء سلعة⇉*\n*❆━━━ ─ • ❪🌩❫ • ─ ━━━❆*\n*❖╏تـوقــيــ✍︎ـع: -*\n*◜Мαиji 🌩╎元◞*\n*⎔ ⋅ ───━ •﹝🌩﹞• ━─── ⋅ ⎔*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}
  if (/^فعالية القلوب$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `*🍁╎تعلن الادارة عن  مسابقة القلوب╎~🍁*\n\n*❖━══━═❈•|🍁|•❈═━══━❖*\n*💠╎ التفاصيل 📋 :*\n\n*💠آلــمــقـدم🎙〖️〗*\n\n*💠 عہدد ألأسئلة 🧾╎〖〗*\n\n*💠 الوقت⏱️╎〖〗*\n\n*💠 نوع الفعاليه 〖القلوب ❤️〗*\n*❖━══━═❈•|🍁|•❈═━══━❖*\n\n *🍁╿ شرح فعاليه ╿🍁*\n\n *❶ تـتـكـون مــن عدد معين المشاركين نعطي كل واحد عدد معين من القلوب*\n\n*❷ ويـجـب عـلى المشاركين الإجابة على الصور او الاسىلة التي يتم طرحها واول واحد يجاوب ياخد نقطة*\n\n *❸ أخر واحد تبقى له قلوب هو الفائز , إذا وجـدت بـجـانـب لـقـبـك [☠] فـهـذا يـعـنـي أنـك خـسرت.*\n\n*◎═━══━═•◆🍁◆•══━═━═◎*\n*💠اول عضو تظهر اجابته عند《 مقدم الفعالية 》وتكون صحيحة، هو من يحصل على نقطة*\n\n\n*💠ارسال أي صورة او فيديو خلال مسابقـة يكلفك 《تنبيه》*\n\n\n*❖━══━═❈•🍁•❈═━══━❖*\n\n*⧉⇄┋مـع تـحـيـات ادارة:*\n\n*『𝐇𝐔𝐍𝐓𝐄𝐑𝐒 🍁¦ 猟師』*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}
 if (/^فعالية القلوب$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `*✤ مشاركين ❤️ الفعالية ✤*\n\n◆ ▬▬▬▬▬▬ ❴🍁❵ ▬▬▬▬▬▬ ◆\n\n*『اللقب ❤️ القلوب』* \n\n*←『』»『』* \n*←『』»『』* \n*←『』»『』*\n*←『』»『』* \n*←『』»『』* \n\n\n*◆ ▬▬▬▬▬▬ ❴🍁❵ ▬▬▬▬▬▬ ◆*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}
if (/^فعالية القلوب$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `*❤️╿ إعلان عن نتائج فعاليه القلوب ╿❤️*~\n*╭───── • ◈ • ─────╮*\n*❃ الــمــقــدم⇍【】*\n*❃ الـجــائــزة⇍【❂100】*\n\n*⊱⊹╾╾╾──❯🍁❮──╼╼╼⊹⊰*\n*⇃🥇⇂ الــمــركــز الــأول ⤋*\n*【】➥*\n*الــجــائــزة⇍『❂120』*\n\n*⇃🥈⇂ الــمــركــز الـثـاني*\n*【】➥* \n*الــجــائــزة⇍『❂100』*\n*⇃🥉⇂ الــمــركــز الثـالـث ⤋*\n*【】➥*\n*الــجــائــزة⇍『❂70』*\n\n\n*⊱⊹╾╾╾──❯🍁❮──╼╼╼⊹⊰*\n*⇃🏅⇂ بــاقــي الــمــشــاركــيــن ⤋*\n*【】➥*\n*【】➥*\n*【】➥*\n*【】➥*\n*【】➥*\n*【】➥*\n*【】➥*\n*【】➥*\n*الــجــائــزة⇍『❂50』*\n\n*╰─────• ◈ •  ─────╯*\n\n*⧉⇄┋مـع تـحـيـات ادارة:*\n\n*『𝐇𝐔𝐍𝐓𝐄𝐑𝐒 🍁¦ 猟師』*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}
  if (/^فعالية صناديق الحظ$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, ` *╭━━ ═━━╃✧⊰🍁⊱✧╄━━═ ━━╮*\n\n  *┃🎁•﹝ فعالية صناديق الحظ ﹞•🎁┃*\n\n*شرح الفعالية:*  \n*1-الاسىلة عبارة عن صور او كتابة حسب المتوفر 🏹*\n*2-كل نقطة تحرزها تختار احد الصناديق لفتحه🎁*\n*3-يوجد نوعان من الصناديق بعضهم مفيد وبعضهم ضار انت وحضك☠️*\n\n1-🎁\n2-🎁\n3-🎁\n4-🎁\n5-🎁\n6-🎁\n7-🎁\n8-🎁\n9-🎁\n10-🎁\n\n*المقدم 🏆:『』*\n*╭━━ ═━━╃✧⊰ 🍁 ⊱✧╄━━═ ━━╮*\n*⧉⇄┋مـع تـحـيـات ادارة:*\n*『𝐇𝐔𝐍𝐓𝐄𝐑𝐒 🍁¦ 猟師』*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}
 
return !0 }
export default handler
