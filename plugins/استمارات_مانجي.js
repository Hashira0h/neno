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
  if (/^طرد مؤبد$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, ` *┐══━━✥◈✥━═━═┌*\n\n*🚨┊اعــلان عن طرد مؤبد┊🚨*\n\n*❆━━━━━═⏣⊰🍁⊱⏣═━━━━━❆*\n\n*♧💫┋اللقـب 「」*\n\n*♧ 📧┋الـمنشـن  :『』*\n\n*♧❓┋ الـسبـب »「」*\n\n*♧ 👨🏻💻┋ المسؤول「」*\n\n*⚜︎══⊹⊱ «◈» ⊰⊹══⚜︎*\n\n*‏⧉⇄┋مـع تـحـيـات ادارة:*\n\n*『𝐇𝐔𝐍𝐓𝐄𝐑𝐒 🍁¦ 猟師』*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}
  if (/^فعالية الهاشيرا$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `*🌸~╎تعلن الادارة عن مسابقة ╎~*😈 \n\n*◆ ▬▬▬▬▬▬ ❴🍁❵ ▬▬▬▬▬▬ ◆*\n*💠╎ التفاصيل 📋 :*\n\n*💠آلــمــقـدم🎙️╎〖〗*\n\n*💠 عہدد ألأسئلة 🧾╎〖〗*\n\n*💠 الوقت⏱️╎〖〗*\n\n*💠 نوع الفعاليه 〖الهاشيرا 🌸 ضد الشياطين 😈〗*\n\n*◆ ▬▬▬▬▬▬ ❴🍁❵ ▬▬▬▬▬▬ ◆*\n\n 🍁 *╿ شرح فعاليه ╿*🍁\n\n *💠 تـتـكـون مــن 5 مـشـاركـيـن هاشيرا 🌸 و 5 شياطين علوية 😈 والمنافسة عبارة عن فريقين فريق الهاشيرا و فريق الشياطين*\n\n*💠 ويـجـب عـلـى الهاشيرا قطع رؤوس الشياطين عـكـس الـشياطين  الـذيـن يـجـب عـلـيـهـم تـدمـيـر الـقـلـوب  الـخـمـسـه الـتـي يـمـتـلـكـهـا الزومبي كل هاشيرا، كـل نـقـطـة يـربـحـها احد المشاركين من فريق الهاشيرا يختار شيطان من الفريق الثاني لقتله بـالتنفس الخاص به* \n\n *💠 أمـا الشيطان كـل نـقـطـه يـربـحـهـا  ياكل قلب واحـد مــن هاشيرا يـخـتـاره اذا اكل الشيطان كل  الـقلوب الـتـي يـمـتـلـكـهـا الـهاشيرا  يُـطـرد الـهاشيرا  مـن الـفـعـالـيـة، إذا وجـدت بـجـانـب لـقـبـك [☠] فـهـذا يـعـنـي أنـك خـسـرت.*\n\n *💠 يفوز الفريق الذي تبقى له اكثر عدد من الأعضاء ❤️*\n\n*◆ ▬▬▬▬▬▬ ❴🍁❵ ▬▬▬▬▬▬ ◆*\n*💠اول عضو تظهر اجابته عند《 مقدم الفعالية 》وتكون صحيحة، هو من يحصل على نقطة*\n\n\n*💠ارسال أي صورة او فيديو خلى مسابقـة يكلفك 《إنذار》*\n\n*⧉⇄┋مـع تـحـيـات ادارة:*\n\n*💠ونتمني من الجميع المشاركة في الفعاليه❤️.* \n*◆ ▬▬▬▬▬▬ ❴🍁❵ ▬▬▬▬▬▬ ◆*\n\n*⧉⇄┋مـع تـحـيـات ادارة:*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}
  if (/^فعالية الهاشيرا$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `*●━━ ━ • ❪🍁❫  • ━ ━━●*\n\n*☆مشاركين 🩸 المسابقة☆*\n\n*●━━ ━ • ❪ الهاشيرا 🌸 ❫  • ━ ━━●*\n\n*『اللقب 🌸 هاشيرا』*\n\n*← 『 هاشيرا الصخر 🪨【 】』»『❤️❤️❤️❤️❤️ 』* \n*←『 هاشيرا الضباب ☁️【 】』» 『🤍🤍🤍🤍 』* \n*← 『هاشيرا الماء 💧【 】 』»『💙💙💙 』*\n*←『هاشيرا النار 🔥【 】 』» 『🧡🧡🧡 』* \n*←『 هاشيرا الحب 💖【 】』» 『💖💖 』*\n\n*●━━ ━ • ❪ الشياطين 😈❫  • ━ ━━●*\n\n*『اللقب 😈 الشياطين 』*\n\n*← 『 القمر العلوي الاول 🗡️【 】』»『🖤🖤🖤🖤🖤 』*\n*← 『 القمر العلوي الثاني 🩸【 】』»『❤️❤️❤️❤️』*\n*← 『 القمر العلوي الثالت 🏀【 】』»『💛💛💛💛 』*\n*← 『 القمر العلوي الخامس 💢【 】』»『💜💜💜 』*\n *← 『 القمر العلوي السادس ⛏️【 】』»『💚💚 』*\n\n*●━━ ━ • ❪🍁❫  • ━ ━━●*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}
  if (/^فعالية الهاشيرا$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `~*🌸╿اعلان عن نتائج المسابقة╿😈*~\n\n*❍↵┆جـوائــز المــســابقــة 🌸↶*\n\n*◆━━━━━◆😈◆━━━━━◆*\n\n*❏⇍┋المــقــدم 🎙️⇩*\n\n*☯︎⇄『』*\n*💰┆⇄الجـائـزة : 「❂200」*\n\n*◆━━━━━◆🌸◆━━━━━◆*\n\n*❍↵┋اعـضـاء الفــريـق الفــائــز 🏆*\n\n*➥【  】*\n\n*💰┆⇄الجـائـزة : 「❂150」*\n\n*◆━━━━━◆😈◆━━━━━◆*\n*❍↵┋اعـضـاء الفـريـق الخـاسـر 🏅*\n\n*〘  〙*\n\n*💰┆⇄الجـائـزة : 「❂100」*\n\n*◆━━━━━◆🌸◆━━━━━◆*\n*⧉⇄┋مـع تـحـيـات ادارة:*\n\n*『𝐇𝐔𝐍𝐓𝐄𝐑𝐒 🍁¦ 猟師』*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}
  if (/^فعالية الزومبي$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `*🍁~╎تعلن الادارة عن مسابقة ╎~*🍁\n\n*◆ ▬▬▬▬▬▬ ❴🍁❵ ▬▬▬▬▬▬ ◆*\n*💠╎ التفاصيل 📋 :*\n\n*💠آلــمــقـدم🎙️╎〖〗*\n\n*💠 عہدد ألأسئلة 🧾╎〖〗*\n\n*💠 الوقت⏱️╎〖〗*\n\n*💠 نوع الفعاليه 〖الزو🧟‍♂️مبي〗*\n\n*◆ ▬▬▬▬▬▬ ❴🍁❵ ▬▬▬▬▬▬ ◆*\n\n *🧟♀️╿ شرح فعاليه ╿*🧟‍♂️\n\n *💠 تـتـكـون مــن 5 مـشـاركـيـن بـشـر و مـصـاص زومبي واحـد، الزومبي لـديـه 5 قـلـوب سـوداء 🖤و الـبـشـر لـديـهـم قـلبين ❤️❤️*\n*💠 ويـجـب عـلـى الزومبي اكل قلوبهم عـكـس الـبـشـر الـذيـن يـجـب عـلـيـهـم تـدمـيـر الـقـلـوب  الـخـمـسـه الـتـي يـمـتـلـكـهـا الزومبي 🧟‍♂️، كـل نـقـطـتـيـن يـربـحـها الـبـشـر يُـطـعـن الزومبي بـالرصاصة الـفـضـية [ 🗡️ ] ويُـنـتـزع  مـنـه قـلـب*\n *💠 أمـا الزومبي كـل نـقـطـهـا يـربـحـهـا  ياكل قلب واحـد مــن بـشـري يـخـتـاره اذا اكل الزومبي قلبين مـن الـقلوب الـتـي يـمـتـلـكـهـا الـبـشـري يُـطـرد الـبـشـري مـن الـفـعـالـيـة، إذا وجـدت بـجـانـب لـقـبـك [☠] فـهـذا يـعـنـي أنـك خـسـرت.*\n\n*◆ ▬▬▬▬▬▬ ❴🍁❵ ▬▬▬▬▬▬ ◆*\n*💠اول عضو تظهر اجابته عند《 مقدم الفعالية 》وتكون صحيحة، هو من يحصل على نقطة*\n\n*💠ارسال أي صورة او فيديو خلى مسابقـة يكلفك 《إنذار》*\n\n*💠ونتمني من الجميع المشاركة في الفعاليه❤️.* \n*◆ ▬▬▬▬▬▬ ❴🍁❵ ▬▬▬▬▬▬ ◆*\n\n*⧉⇄┋مـع تـحـيـات ادارة:*\n\n*『𝐇𝐔𝐍𝐓𝐄𝐑𝐒 🍁¦ 猟師』*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}
  if (/^فعالية الزومبي$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `*●━━ ━ • ❪ 🍁 ❫  • ━ ━━●*\n\n*❏┆مشاركين 🧟‍♀️ المسابقة*\n\n*●━━ ━ • ❪ البشر🧑🏻 ❫  • ━ ━━●*\n\n*『اللقب 🧑🏻 البشر』*\n\n*← 『 』»『❤️❤️ 』* \n*←『 』» 『❤️❤️ 』* \n*← 『 』»『❤️❤️ 』*\n*←『 』» 『❤️❤️ 』* \n*←『 』» 『❤️❤️ 』*\n\n*●━━ ━ • ❪ الزو🧟‍♂️مبي ❫  • ━ ━━●*\n\n*『اللقب 🖤 القلوب 』*\n\n*← 『 』»『🖤🖤🖤🖤🖤 』* \n\n*●━━ ━ • ❪🍁❫  • ━ ━━●*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}
  if (/^فعالية الزومبي$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `~*🙋🏻♂️╿اعلان عن نتائج المسابقة╿🧟‍♂️*~\n\n*❍↵┆جـوائــز المــســابقــة 🧟‍♂️↶*\n\n*◆━━━━━◆🧟‍♂️◆━━━━━◆*\n\n*❏⇍┋المــقــدم 🎙️⇩*\n\n*☯︎⇄『』*\n*💰┆⇄الجـائـزة : 「❂220」*\n\n*◆━━━━━◆🙋🏻♂️◆━━━━━◆*\n\n*❍↵┋اعـضـاء الفــريـق الفــائــز 🏆*\n\n*➥【  】*\n\n*💰┆⇄الجـائـزة : 「❂260」*\n\n*◆━━━━━◆🧟◆━━━━━◆*\n*❍↵┋اعـضـاء الفـريـق الخـاسـر 🏅*\n\n*〘  〙*\n\n*💰┆⇄الجـائـزة : 「❂160」*\n\n*◆━━━━━◆🙋🏻♀️◆━━━━━◆*\n*⧉⇄┋مـع تـحـيـات ادارة:*\n\n*『𝐇𝐔𝐍𝐓𝐄𝐑𝐒 🍁¦ 猟師』*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}
   if (/^فعالية الديث نوت$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `*🍁~╎تعلن الادارة عن مسابقة ╎~*🍁\n\n*◆ ▬▬▬▬▬▬ ❴🍁❵ ▬▬▬▬▬▬ ◆*\n*💠╎ التفاصيل 📋 :*\n\n*💠آلــمــقـدم🎙️╎〖〗*\n\n*💠 عہدد ألأسئلة 🧾╎〖〗*\n\n*💠 الوقت⏱️╎〖〗*\n\n*💠 نوع الفعاليه 〖الزو🧟‍♂️مبي〗*\n\n*◆ ▬▬▬▬▬▬ ❴🍁❵ ▬▬▬▬▬▬ ◆*\n\n *🧟♀️╿ شرح فعاليه ╿*🧟‍♂️\n\n *💠 تـتـكـون مــن 5 مـشـاركـيـن بـشـر و مـصـاص زومبي واحـد، الزومبي لـديـه 5 قـلـوب سـوداء 🖤و الـبـشـر لـديـهـم قـلبين ❤️❤️*\n*💠 ويـجـب عـلـى الزومبي اكل قلوبهم عـكـس الـبـشـر الـذيـن يـجـب عـلـيـهـم تـدمـيـر الـقـلـوب  الـخـمـسـه الـتـي يـمـتـلـكـهـا الزومبي 🧟‍♂️، كـل نـقـطـتـيـن يـربـحـها الـبـشـر يُـطـعـن الزومبي بـالرصاصة الـفـضـية [ 🗡️ ] ويُـنـتـزع  مـنـه قـلـب*\n *💠 أمـا الزومبي كـل نـقـطـهـا يـربـحـهـا  ياكل قلب واحـد مــن بـشـري يـخـتـاره اذا اكل الزومبي قلبين مـن الـقلوب الـتـي يـمـتـلـكـهـا الـبـشـري يُـطـرد الـبـشـري مـن الـفـعـالـيـة، إذا وجـدت بـجـانـب لـقـبـك [☠] فـهـذا يـعـنـي أنـك خـسـرت.*\n\n*◆ ▬▬▬▬▬▬ ❴🍁❵ ▬▬▬▬▬▬ ◆*\n*💠اول عضو تظهر اجابته عند《 مقدم الفعالية 》وتكون صحيحة، هو من يحصل على نقطة*\n\n*💠ارسال أي صورة او فيديو خلى مسابقـة يكلفك 《إنذار》*\n\n*💠ونتمني من الجميع المشاركة في الفعاليه❤️.* \n*◆ ▬▬▬▬▬▬ ❴🍁❵ ▬▬▬▬▬▬ ◆*\n\n*⧉⇄┋مـع تـحـيـات ادارة:*\n\n*『𝐇𝐔𝐍𝐓𝐄𝐑𝐒 🍁¦ 猟師』*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}
  if (/^فعالية الديث نوت$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `*●━━ ━ • ❪ 🍁 ❫  • ━ ━━●*\n\n*❏┆مشاركين 🧟‍♀️ المسابقة*\n\n*●━━ ━ • ❪ البشر🧑🏻 ❫  • ━ ━━●*\n\n*『اللقب 🧑🏻 البشر』*\n\n*← 『 』»『❤️❤️ 』* \n*←『 』» 『❤️❤️ 』* \n*← 『 』»『❤️❤️ 』*\n*←『 』» 『❤️❤️ 』* \n*←『 』» 『❤️❤️ 』*\n\n*●━━ ━ • ❪ الزو🧟‍♂️مبي ❫  • ━ ━━●*\n\n*『اللقب 🖤 القلوب 』*\n\n*← 『 』»『🖤🖤🖤🖤🖤 』* \n\n*●━━ ━ • ❪🍁❫  • ━ ━━●*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}
  if (/^نعم$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `نعامه ترفسك🦉`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}
  if (/^نعم$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `نعامه ترفسك🦉`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}
return !0 }
export default handler
