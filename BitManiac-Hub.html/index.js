const database = {
        games: [
            { name: "Minecraft PE", desc: "🔥🎮Minecraft Pocket Edition Latest Mobile Version.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBw9g6jfRMqOerLIjz4rhmQK5-V3D19bbjdw&s", link: "https://minecraft-bit.netlify.app" },
            { name: "Minecraft Java", desc: "🔥🎮Minecraft Java Edition", img: "https://assetsio.gnwcdn.com/ar1or8.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", link: "#" }, 
            { name: "GTA San Andreas", desc: "🔥🎮GTA San Andreas original for Mobile and PCs!", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7rIwx7QOsATHOtcXu7S8ZSUS7dx5_WX6v0w&s", link: "#" },
            { name: "GTA V Mobile", desc: "🔥🎮Enjoy the GTA V optimized on your Mobile!", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRreCCbv6GO8pQmxsPAsDbTrm483mX16VtEKA&s", link: "#" },
            { name: "GTA VI fanmade", desc: "🔥🎮Enjoy the GTA VI fanmade on your Mobile!", img: "https://www.rockstargames.com/VI/_next/image?url=%2FVI%2F_next%2Fstatic%2Fmedia%2FJason_and_Lucia_01_With_Logos_landscape.8596f77a.jpg&w=3840&q=75", link: "#" },
            { name: "GTA III", desc: "🔥🎮A gta game", img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1546970/ss_56f78f530f5bfea0395380ba23cc67cbc0fdc0b0.1920x1080.jpg?t=1741117830", link: "#" },
            { name: "GTA Vice City", desc: "Old 80s neon craze", img: "https://picsum.photos/300/140?random=1", link: "#" },  
            { name: "GTA Lyberty city stories", desc: "🔥🎮A GTA story game", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBx4T1Kpk-x9uti-_q-dmlQFj9ZnaSCl_gA&s", link: "#" }, 
            { name: "Grand Mobile", desc: "🔥🎮An Ultimate Game of crime virtualworld.", img: "https://techleez.com/wp-content/uploads/2025/07/unnamed-2025-07-27T152006.120.webp", link: "#" },
            { name: "Free City", desc: "🔥🎮An openworld GTA game from Garena.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxx9tclDprvdQDWE0oZUaNXepNZWd9D5a6g&s", link: "#" },
            { name: "Mad Out 2", desc: "🔥🎮Action Openworld game", img: "https://cdn.aptoide.com/imgs/1/b/4/1b461e3ac06eefe4862da13adba0bade_screen.jpg?w=325", link: "#" },
            { name: "Car X street", desc: "🔥🎮Unlimited 💵💰Money MOD APK", img: "https://i.ytimg.com/vi/BW7VYvChIig/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDvr0AfNgDKUMcF8Z819bXR_2ijdA", link: "#" },
            { name: "Asphalt 8: Airbrone", desc: "🔥🎮Race with the racing beasts!", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBGvaUoAxAXGfTgIsowRR6UPrub_iuVWRFFg&s", link: "#" },
            { name: "Asphalt 9: Legends", desc: "🔥🎮An Ultimate Realistic Racing World!", img: "https://static.wikia.nocookie.net/asphalt/images/e/ef/A9_v1.5_icon.png/revision/latest/smart/width/250/height/250?cb=20190410200039", link: "#" },
            { name: "Extreme Car Driving", desc: "🔥🎮Arcade and race", img: "https://danifm.com/wp-content/uploads/2023/06/carrusel-3.jpg.webp", link: "#" },
            { name: "Hill Climb Racing", desc: "🔥🎮2D racing fun Unlimited Coins MOD APK", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDB4Vy1AvhaTowjJ8y19el-LxrzRX4XZg9tw&s", link: "#" },
            { name: "Hill Climb Racing 2", desc: "🔥🎮2D racing fun MOD APK", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6PNKh73_mFWMWAQTa0VNUqeOer0ZqcsG0w&s", link: "#" },
            { name: "FreeFire MAX", desc: "🔥🎮Action Shotter game", img: "https://i0.wp.com/www.nenow.in/wp-content/uploads/2022/03/free-fire-max-redeem-code-.jpg?fit=1920%2C1200&ssl=1", link: "#" },
            { name: "BGMI", desc: "🔥🎮Battle Grounds Mobile India", img: "https://static.wixstatic.com/media/f95046_d2e4f47291c343038829cafd61d2fa51~mv2.webp/v1/fill/w_526,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f95046_d2e4f47291c343038829cafd61d2fa51~mv2.webp", link: "#" },
            { name: "Fornite", desc: "🔥🎮Action Shooter game", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXz7Qm9p5EV_ZN7A1gHkKjlN54jWKsNfXJAA&s", link: "#" },
            { name: "Roblox", desc: "🔥🎮Sandbox game", img: "https://techwiser.com/wp-content/uploads/2025/05/All-Roblox-Icons-and-Symbols-Meaning-%E2%80%93-Complete-Guide.webp", link: "#" },
            { name: "Stumble Guys", desc: "🔥🎮Sandbox multiplayer game", img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1677740/header.jpg?t=1755116858", link: "#" },
            { name: "PK XD", desc: "🔥🎮Sandbox multiplayer game", img: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b6/7b/b1/b67bb1eb-6d5e-9064-5c31-0bf7303ef12b/artwork.jpg/375x375bb.webp", link: "#" },
            { name: "Poppy Playtime Ch:4", desc: "🔥👻Poppy Playtime Horror game", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGXCXREPZHy5mSN9966DZ4tQU9eeQbhC4LqQ&s", link: "#"},
            { name: "Poppy Playtime Ch:3", desc: "🔥👻Poppy Playtime Horror game", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSykWvI7Msz36kh78dUl1eA7qEmj3jBJFLGpg&s", link: "#"},
            { name: "Poppy Playtime Ch:2", desc: "🔥👻Poppy Playtime Horror game", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRek6lYx87KGMFniWQQIGncp-hOBETsyMhbfQ&s", link: "#"},
            { name: "Poppy Playtime Ch:1", desc: "🔥👻Poppy Playtime Horror game", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw9aD9hz9Sg8frpGuIIr6b9k_S3l1nBojJAQ&s", link: "#"},
            { name: "Granny: Horror", desc: "🔥👻Horror game", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQr0zmHi5A1jfAnmGEqxHM3OVLmKun5eMBcA&s", link: "#" },
            { name: "Evil Nun", desc: "Horror game", img: "https://static.wikia.nocookie.net/evil-nun-the-mobile-game/images/2/2e/MoreCharacter-min.jpg/revision/latest?cb=20230713071422", link: "#" },
            { name: "Ice Scream: Horror", desc: "Horror game", img: "https://static.wikia.nocookie.net/ice-scream/images/5/5f/IS1-21December2025Icon.png/revision/latest?cb=20260130185747", link: "#" },
            { name: "FNAF :Horror", desc: "Horror Escape", img: "https://static.wikia.nocookie.net/freddy-fazbears-pizza/images/7/71/Rides-Button.png/revision/latest/scale-to-width-down/200?cb=20220205174245", link: "#" },
            { name: "Hello Neighbour", desc: "Escaping Horror", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Need For Speed", desc: "Action", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Drift Max Pro", desc: "Action", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Warframe Mobile", desc: "Action RPG", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Tomb Raider™ (2026 Port)", desc: "Action Adventure", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Balatro", desc: "Roguelike Card", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Rainbow Six Mobile", desc: "Tactical Shooter", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Reigns: The Witcher", desc: "Strategy", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Subnautica Below Zero", desc: "Survival", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Dragon Rise", desc: "Idle RPG", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Oceanhorn 3: Legend of the Shadow Sea", desc: "Adventure", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Truck Masters: World Sim", desc: "Simulation", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Silt", desc: "Puzzle Adventure", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Dave the Diver", desc: "Adventure Sim", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Black Border 3", desc: "Simulation", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Iron Roads", desc: "Strategy", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Pocket Golf Tournament", desc: "Sports", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Destiny: Rising", desc: "FPS RPG", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Max Payne Mobile", desc: "Action", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Grand Theft Auto: Liberty City Stories", desc: "Open World", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Grand Theft Auto: Chinatown Wars", desc: "Open World", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Shadowgun Legends (Pro)", desc: "FPS", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Neon Shadow", desc: "Cyberpunk FPS", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Space Marshals 1, 2 & 3", desc: "Tactical Action", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Xenowerk", desc: "Action", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Midnight Star: Renegade", desc: "Shooter", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "JYDGE", desc: "Top-down Shooter", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Tesla vs Lovecraft", desc: "Action", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Total War: MEDIEVAL II", desc: "Strategy", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Total War: ROME", desc: "Strategy", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Total War: EMPIRE", desc: "Strategy", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "XCOM: Enemy Within", desc: "Tactical", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Tropico: The People's Demo", desc: "City Builder", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Prison Architect: Mobile", desc: "Management", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "The Escapists: Walking Dead", desc: "Strategy", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Kingdom: New Lands", desc: "Strategy", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Kingdom: Two Crowns", desc: "Strategy", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Northgard", desc: "Viking Strategy", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Final Fantasy VII", desc: "JRPG", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Final Fantasy VIII Remastered", desc: "JRPG", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Final Fantasy IX", desc: "JRPG", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Final Fantasy Tactics: WotL", desc: "Tactical RPG", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Star Wars: KOTOR", desc: "RPG", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Dragon Quest VIII", desc: "JRPG", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Neverwinter Nights: EE", desc: "RPG", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Baldur's Gate II: EE", desc: "RPG", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Grimvalor", desc: "Action RPG", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Pascal's Wager", desc: "Souls-like RPG", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "The Room: Old Sins", desc: "Puzzle", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Layton: Curious Village", desc: "Puzzle", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Geometry Dash", desc: "Action Puzzle", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Layton: Pandora's Box", desc: "Puzzle", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Layton: Lost Future", desc: "Puzzle", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Monument Valley: Panoramic", desc: "Puzzle", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Gris", desc: "Artistic Adventure", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Florence", desc: "Story", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Gorogoa", desc: "Puzzle", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Framed 1 & 2", desc: "Noir Puzzle", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Mini Metro", desc: "Puzzle", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Alien: Isolation", desc: "Survival Horror", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Five Nights at Freddy's: SL", desc: "Horror", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Five Nights at Freddy's: HW", desc: "Horror", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Bendy and the Ink Machine", desc: "Horror", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Little Nightmares", desc: "Puzzle Horror", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Fran Bow Chapter 1-5", desc: "Horror", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Forgotten Memories", desc: "Horror", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Garten of Banban 1-8", desc: "Horror", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "The Baby in Yellow (Ad-Free Free Premium)", desc: "☠👻Horror", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Poppy Playtime Chapter 3", desc: "☠👻Horror", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "GRID Autosport", desc: "🏎🏁 Racing Sim", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Wreckfest", desc: "🏎🏁 Racing", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Rush Rally 3", desc: "🏎🏁 Rally", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Need for Speed: Most Wanted", desc: "🏎🏁 Racing", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "F1 Manager 2026", desc: "🏁🏎Sports Management", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "NBA 2K26 Mobile", desc: "Sports", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "FC Mobile", desc: "⚽sports", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Football Manager 2026 Mobile", desc: "⚽Sports", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Wrestling Empire (Pro)", desc: "Sports", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "True Skate", desc: "Sports", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Skate Party 3", desc: "Sports", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Stardew Valley", desc: "👨‍🌾 Farming Sim", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Terraria", desc: "Sandbox", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Pocket City 2", desc: "🏗 City Builder", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Construction Simulator 4", desc: "🏗 Construction Simulation", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Farming Simulator 25", desc: "👨‍🌾 Simulation", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Indian Train Simulator", desc: "🚂 Train Simulator", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Bus Simulator Indonesia", desc: "🚍🚌 Bus Sim", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "The Sims Free Free PremiumPlay (VIP)", desc: "Life Sim", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Papers, Please", desc: "Dystopian Sim", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "This War of Mine", desc: "Survival Sim", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Graveyard Keeper", desc: "RPG Sim", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Dead Cells: Medley of Endeavors", desc: "Action", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Vampire Survivors (Free Premium DLC)", desc: "Roguelike", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Brotato: Free Premium", desc: "Arena Shooter", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Hollow Knight (Mobile Port)", desc: "Metroidvania", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Cuphead Mobile", desc: "Boss-Rush", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Streets of Rage 4", desc: "Action", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Katana ZERO", desc: "Action", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "ScourgeBringer", desc: "Action", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Loop Hero", desc: "Strategy RPG", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Dicey Dungeons", desc: "Roguelike", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Dysmantle", desc: "Survival", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Don't Starve: Pocket Edition", desc: "Survival", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Crashlands 2", desc: "Adventure RPG", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Oceanhorn: Monster of Uncharted Seas", desc: "Adventure", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Mr.Meat", desc: "Horror game.", img: "https://picsum.photos/300/140?random=1", link: "#" }
        ],
        soft: [
            { name: "CapCut Pro", desc: "No watermark,pro features unlocked.", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Filmora Pro", desc: "Pro unlocked", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Adobe Premier Pro", desc: "Special Software", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Adobe Photoshop", desc: "Industry standard PC Photo Editor", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Adobe Lightroom", desc: "Mobile Photo Editor with AI", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Adobe Express", desc: "AI Thumbnail Maker & Editor", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Canva Pro", desc: "Simple Thumbnail Maker & Editor", img: "https//picsum.photos/300/140?random=1", link: "#" },
            { name: "Photoshop CC", desc: "Portable version.", img: "https://picsum.photos/300/140?random=1", link: "#" }
        ],
        os: [
            { name: "Windows 11 Pro ", desc: "Ultra fast stripped OS. 💹Fully Activated*!", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Windows 10 Pro ", desc: "Ultra fast stripped OS. 💹Fully Activated*!", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Windows 8.1 Pro", desc: "Ultra fast stripped OS. 💹Fully Activated*!", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "windows 7 Pro" , desc: "Ultra fast stripped OS. 💹Fully Activated*!", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Ubuntu", desc: "The most popular desktop Linux OS.", img: "https://upload.wikimedia.org/wikipedia/commons/a/ac/App_icon_ubuntu.svg", link: "#" },
            { name: "Debian", desc: "The rock-solid foundation for Linux.", img: "https://upload.wikimedia.org/wikipedia/commons/6/66/Openlogo-debian.svg", link: "#" },
            { name: "Arch Linux", desc: "A lightweight and flexible distro.", img: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Arch_Linux_logo.svg", link: "#" },
            { name: "Fedora", desc: "Leading-edge software for workstations.", img: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Fedora_logo.svg", link: "#" },
            { name: "Linux Mint", desc: "Elegant and comfortable desktop OS.", img: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Linux_Mint_logo_without_text.svg", link: "#" },
            { name: "Kali Linux", desc: "Advanced Penetration Testing distro.", img: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Kali-linux-logo.svg", link: "#" },
            { name: "Manjaro", desc: "User-friendly Arch-based system.", img: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Manjaro-logo.svg", link: "#" },
            { name: "Pop!_OS", desc: "Built for STEM professionals.", img: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Pop_OS-Logo-Symbol.svg", link: "#" },
            { name: "CentOS", desc: "Enterprise-grade community OS.", img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/CentOS_logo.svg", link: "#" },
            { name: "openSUSE", desc: "Stable and versatile for developers.", img: "https://upload.wikimedia.org/wikipedia/commons/d/d0/OpenSUSE_Logo.svg", link: "#" },
            { name: "Elementary OS", desc: "A fast, open replacement for macOS.", img: "https://upload.wikimedia.org/wikipedia/commons/8/83/Elementary_OS_logo.svg", link: "#" },
            { name: "Zorin OS", desc: "Designed for Windows switchers.", img: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Zorin_OS_logo.svg", link: "#" },
            { name: "Slackware", desc: "The oldest maintained distribution.", img: "https://upload.wikimedia.org/wikipedia/commons/2/22/Slackware_logo.svg", link: "#" },
            { name: "Gentoo", desc: "A high-performance source-based Linux.", img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Gentoo-logo.svg", link: "#" },
            { name: "Puppy Linux", desc: "Ultra-lightweight for old PCs.", img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Puppy_Linux_logo.svg", link: "#" },
            { name: "Solus", desc: "Modern OS built from scratch.", img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Solus_Logo.svg", link: "#" },
            { name: "MX Linux", desc: "A stable, mid-weight OS.", img: "https://upload.wikimedia.org/wikipedia/commons/f/f6/MX_Linux_logo.svg", link: "#" },
            { name: "EndeavourOS", desc: "Terminal-centric Arch-based distro.", img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/EndeavourOS_Logo.svg", link: "#" },
            { name: "Garuda Linux", desc: "Focused on performance and gaming.", img: "https://upload.wikimedia.org/wikipedia/commons/2/23/Garuda_Linux_logo.svg", link: "#" },
            { name: "Void Linux", desc: "Independent rolling release.", img: "https://upload.wikimedia.org/wikipedia/commons/0/02/Void_Linux_logo.svg", link: "#" },
            { name: "Rocky Linux", desc: "The successor to CentOS.", img: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Rocky_Linux_logo.svg", link: "#" },
            { name: "AlmaLinux", desc: "Open-source enterprise OS.", img: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Almalinux-logo-color.svg", link: "#" },
            { name: "Tails", desc: "Privacy and anonymity focused.", img: "https://upload.wikimedia.org/wikipedia/commons/5/52/Tails_logo.svg", link: "#" },
            { name: "Parrot OS", desc: "Security and development focused.", img: "https://upload.wikimedia.org/wikipedia/commons/1/11/Parrot_os_logo.svg", link: "#" },
            { name: "NixOS", desc: "Purely functional Linux distribution.", img: "https://upload.wikimedia.org/wikipedia/commons/c/c4/NixOS_logo.svg", link: "#" },
            { name: "Deepin", desc: "Elegant and user-friendly desktop.", img: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Deepin_logo.svg", link: "#" },
            { name: "Lubuntu", desc: "Fast and lightweight Ubuntu variant.", img: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Lubuntu_logo.svg", link: "#" },
            { name: "Xubuntu", desc: "Simple and stable Ubuntu variant.", img: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Xubuntu_logo.svg", link: "#" },
            { name: "Kubuntu", desc: "Ubuntu with the KDE Plasma desktop.", img: "https://upload.wikimedia.org/wikipedia/commons/7/76/Kubuntu_logo.svg", link: "#" },
            { name: "SteamOS", desc: "Valve's gaming-focused Linux OS.", img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Steam_Logo.png", link: "#" }
        ],
        pdf: [
            { name: "Atomic Habits", desc: "a pdf", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Atomic Habits", desc: "a pdf", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Atomic Habits", desc: "a pdf", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Atomic Habits", desc: "a pdf", img: "https://picsum.photos/300/140?random=1", link: "#" }
        ]
 
    };


    function render(data, gridId) {
        const grid = document.getElementById(gridId);
        if(!grid) return;
        grid.innerHTML = data.map(item => {
     // Generates random rating between 4.1 and 5.0
        const randomRating = (Math.random() * (5.0 - 4.1) + 4.1).toFixed(1);
        
        // Generates random downloads between 1 and 23.6
        const randomDownloads = Math.floor(Math.random() * 13) + 1;

        return `
            <div class="card">
                <div class="card-header">
                    <span>${randomDownloads}M+📥Downloads</span> 
                    <span class="rating">⭐ ${randomRating} nice</span>
                </div>
                <div class="card-image-container">
            <img src=${item.img}" alt="${item.name}" class="card-img">
        </div>
                    <div class="card-body">
                    <h3>${item.name}</h3>
                    <p>${item.desc}</p>
                    <a href="${item.link}" class="dl-btn"> 📥 Download Now</a>
                </div>
                
            </div>
        `;
    }).join('');
}
// 1. Listen to the whole document (Event Delegation)
document.addEventListener('click', function (e) {
    const btn = e.target.closest('.dl-btn');
    
    if (btn) {
        e.preventDefault();
        
        const loader = document.getElementById('loader-screen');
        const perText = document.getElementById('percent');
        const progressBar = document.getElementById('progress-bar');
        
        loader.style.display = "flex";
        let count = 0;

        const timer = setInterval(() => {
            count += Math.floor(Math.random() * 4) + 1;
            
            if (count >= 100) {
                count = 100;
                clearInterval(timer);
                
                setTimeout(() => {
                    loader.style.display = "none";
                    // Your redirect logic here
                }, 800);
            }

            // Update both the text and the width of the progress bar
            perText.innerText = count + "%";
            progressBar.style.width = count + "%";
            
        }, 250); // 500ms speed
    }
});
           
// This is the DOM code that triggers your render function
document.addEventListener('DOMContentLoaded', () => {
    render(database.games, 'grid-games');
    render(database.soft, 'grid-soft');
    render(database.os, 'grid-os');
    render(database.pdf, 'grid-pdf');

    // This calls the function you already created
    renderBitManiac(); 
    
    console.log("DOM fully loaded and games rendered!");
});

