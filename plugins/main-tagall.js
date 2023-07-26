let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`⧉ جروب : \n*${groupMetadata.subject}*\n⧉ عدد الاعضاء : *${participants.length}*${text ? `\n⧉ الرساله : ${text}\n` : ''}\n*❆──━━┈ ⊰🌩⊱ ┈━━──❆*\n【 المنشن 】\n` + users.map(v => '🌩 @' + v.replace(/@.+/, '')).join`\n` + '\n*❆──━━┈ ⊰🌩⊱ ┈━━──❆*\n【 نينو 】', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['منشن']
handler.admin = true
handler.group = true

export default handler
