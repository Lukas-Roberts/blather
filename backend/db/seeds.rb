# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
password = 'password'

#------------- CREATED USERS -------------#
tom = User.create(username: 'theRealTomHolland', password: password, password_confirmation: password, email: 'tomholland@gmail.com', first_name: 'Tom', last_name: 'Holland')
jen = User.create(username: 'notRachelGreen', password: password, password_confirmation: password, email: 'jenaniston@gmail.com', first_name: 'Jennifer', last_name: 'Aniston')
emma = User.create(username: 'theRealHester', password: password, password_confirmation: password, email: 'hesterprinn@gmail.com', first_name: 'Emma', last_name: 'Stone')
iliza = User.create(username: 'anElderMillenial', password: password, password_confirmation: password, email: 'elderiliza@gmail.com', first_name: 'Iliza', last_name: 'Shlesinger')
tiff = User.create(username: 'ohSheReady', password: password, password_confirmation: password, email: 'tiffhaddish@gmail.com', first_name: 'Tiffany', last_name: 'Haddish')
sarah = User.create(username: 'theRealSJP', password: password, password_confirmation: password, email: 'sarahjessica@gmail.com', first_name: 'Sarah', last_name: 'JessicaParker')
zen = User.create(username: 'ZENDAYA', password: password, password_confirmation: password, email: 'zendaya@gmail.com', first_name: 'Zendaya', last_name: 'Unknown')
finn = User.create(username: 'tooFinn', password: password, password_confirmation: password, email: 'finnwolfy@gmail.com', first_name: 'Finn', last_name: 'Wolfhart')
jimmy = User.create(username: 'whereIsJustin', password: password, password_confirmation: password, email: 'jimmyfallon@gmail.com', first_name: 'Jimmy', last_name: 'Fallon')
taylor = User.create(username: 'wolfNotShark', password: password, password_confirmation: password, email: 'secondtaylor@gmail.com', first_name: 'Taylor', last_name: 'Lautner')
#---------------------------#


#------------- CREATED BLEATS -------------#
tom1 = Bleat.create(user_id: 1, content: 'ITS ME, SPIDERMAN')
tom2 = Bleat.create(user_id: 1, content: 'I miss you tony')
tom3 = Bleat.create(user_id: 1, content: 'You can stand under my umbrella')

jen1 = Bleat.create(user_id: 2, content: 'We were so not on a break')
jen2 = Bleat.create(user_id: 2, content: 'we can talk about it more at Mons house tonight')
jen3 = Bleat.create(user_id: 2, content: 'I dont know what to put')

emma1 = Bleat.create(user_id: 3, content: 'I gotta pocket, gotta pocket full of sunshine')
emma2 = Bleat.create(user_id: 3, content: 'Glade candles are so sexy')
emma3 = Bleat.create(user_id: 3, content: 'Lalalalalala')

iliza1 = Bleat.create(user_id: 4, content: 'get over here blanch')
iliza2 = Bleat.create(user_id: 4, content: 'I AM YOUR ELDER!')
iliza3 = Bleat.create(user_id: 4, content: 'Dont look in my center console')

tiff1 = Bleat.create(user_id: 5, content: 'Hi I am Tiffany.')
tiff2 = Bleat.create(user_id: 5, content: 'Are you ready? I dont think you are.')
tiff3 = Bleat.create(user_id: 5, content: 'BOOOM!')

sarah1 = Bleat.create(user_id: 6, content: 'I need to catch up on my blog')
sarah2 = Bleat.create(user_id: 6, content: 'Does anyone know where Charlotte went?')
sarah3 = Bleat.create(user_id: 6, content: 'Im moving to jersey')

zen1 = Bleat.create(user_id: 7, content: 'yea, I do wish we could rewrite the stars')
zen2 = Bleat.create(user_id: 7, content: 'Hi Tom, how are you?')
zen3 = Bleat.create(user_id: 7, content: 'Who is ready for the new season of Euphoria')

finn1 = Bleat.create(user_id: 8, content: 'I have been a victim of type-casting. Type-casting is real, people. OPEN YOUR EYES')
finn2 = Bleat.create(user_id: 8, content: 'That last bleat got a little weird right, sorry about that')
finn3 = Bleat.create(user_id: 8, content: 'this is why kids shouldnt have social media accounts')

jimmy1 = Bleat.create(user_id: 9, content: 'Hey Justin, do you promise we will be best friends forever?')
jimmy2 = Bleat.create(user_id: 9, content: 'Hey Justin, are you mad at me? Is that why you are not responding to me?')
jimmy3 = Bleat.create(user_id: 9, content: 'Hey Justin, you should join blather so you can respond to my bleats')

taylor1 = Bleat.create(user_id: 10, content: 'Sharkboy and Lavagirl was the biggest mistake of my life')
taylor2 = Bleat.create(user_id: 10, content: 'I miss being able to turn into a wolf')
taylor3 = Bleat.create(user_id: 10, content: 'I also go back to december sometimes...')
#-----------------------------#


#------------- CREATED FOLLOWING_USERS -------------#
tomFollowZen = FollowingUser.create(following_id: 7, follower_id: 1)
tomFollowJimmy = FollowingUser.create(following_id: 9, follower_id: 1)
tomFollowIliza = FollowingUser.create(following_id: 4, follower_id: 1)

jenFollowIliza= FollowingUser.create(following_id: 4, follower_id: 2)
jenFollowTaylor= FollowingUser.create(following_id: 10, follower_id: 2)
jenFollowTiffany= FollowingUser.create(following_id: 5, follower_id: 2)

emmaFollowJen= FollowingUser.create(following_id: 2, follower_id: 3)
emmaFollowJimmy= FollowingUser.create(following_id: 9, follower_id: 3)
emmaFollowZen= FollowingUser.create(following_id: 7, follower_id: 3)

ilizaFollowEmma= FollowingUser.create(following_id: 3, follower_id: 4)
ilizaFollowSarah= FollowingUser.create(following_id: 6, follower_id: 4)
ilizaFollowFinn= FollowingUser.create(following_id: 8, follower_id: 4)

tiffFollowFinn= FollowingUser.create(following_id: 8, follower_id: 5)
tiffFollowTom= FollowingUser.create(following_id: 1, follower_id: 5)
tiffFollowTaylor= FollowingUser.create(following_id: 10, follower_id: 5)

sarahFollowIliza= FollowingUser.create(following_id: 4, follower_id: 6)
sarahFollowJimmy= FollowingUser.create(following_id: 9, follower_id: 6)
sarahFollowTiffany= FollowingUser.create(following_id: 5, follower_id: 6)

zenFollowFinn= FollowingUser.create(following_id: 8, follower_id: 7)
zenFollowJen= FollowingUser.create(following_id: 2, follower_id: 7)
zenFollowTom= FollowingUser.create(following_id: 1, follower_id: 7)

finnFollowTom= FollowingUser.create(following_id: 1, follower_id: 8)
finnFollowZen= FollowingUser.create(following_id: 7, follower_id: 8)
finnFollowJen= FollowingUser.create(following_id: 2, follower_id: 8)

jimmyFollowEmma= FollowingUser.create(following_id: 3, follower_id: 9)
jimmyFollowSarah= FollowingUser.create(following_id: 6, follower_id: 9)
jimmyFollowTiffany= FollowingUser.create(following_id: 5, follower_id: 9)

taylorFollowEmma= FollowingUser.create(following_id: 3, follower_id: 10)
taylorFollowTiffany= FollowingUser.create(following_id: 5, follower_id: 10)
taylorFollowTom= FollowingUser.create(following_id: 1, follower_id: 10)
#-----------------------------------#