# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
password = 'password'

tom = User.create(username: 'theRealTomHolland', password: password, email: 'tomholland@gmail.com', first_name: 'Tom', last_name: 'Holland')
jen = User.create(username: 'notRachelGreen', password: password, email: 'jenaniston@gmail.com', first_name: 'Jennifer', last_name: 'Aniston')
emma = User.create(username: 'theRealHester', password: password, email: 'hesterprinn@gmail.com', first_name: 'Emma', last_name: 'Stone')
iliza = User.create(username: 'anElderMillenial', password: password, email: 'elderiliza@gmail.com', first_name: 'Iliza', last_name: 'Shlesinger')
tiff = User.create(username: 'ohSheReady', password: password, email: 'tiffhaddish@gmail.com', first_name: 'Tiffany', last_name: 'Haddish')
sarah = User.create(username: 'theRealSJP', password: password, email: 'sarahjessica@gmail.com', first_name: 'Sarah', last_name: 'JessicaParker')
zen = User.create(username: 'ZENDAYA', password: password, email: 'zendaya@gmail.com', first_name: 'Zendaya', last_name: 'Unknown')
finn = User.create(username: 'tooFinn', password: password, email: 'finnwolfy@gmail.com', first_name: 'Finn', last_name: 'Wolfhart')
jimmy = User.create(username: 'whereIsJustin', password: password, email: 'jimmyfallon@gmail.com', first_name: 'Jimmy', last_name: 'Fallon')
taylor = User.create(username: 'wolfNotShark', password: password, email: 'secondtaylor@gmail.com', first_name: 'Taylor', last_name: 'Lautner')

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

tiff1 = Bleat.create(user_id: 5, content: '')
tiff2 = Bleat.create(user_id: 5, content: '')
tiff3 = Bleat.create(user_id: 5, content: '')

sarah1 = Bleat.create(user_id: 6, content: '')
sarah2 = Bleat.create(user_id: 6, content: '')
sarah3 = Bleat.create(user_id: 6, content: '')

zen1 = Bleat.create(user_id: 7, content: '')
zen2 = Bleat.create(user_id: 7, content: '')
zen3 = Bleat.create(user_id: 7, content: '')

finn1 = Bleat.create(user_id: 8, content: '')
finn2 = Bleat.create(user_id: 8, content: '')
finn3 = Bleat.create(user_id: 8, content: '')

jimmy1 = Bleat.create(user_id: 9, content: '')
jimmy2 = Bleat.create(user_id: 9, content: '')
jimmy3 = Bleat.create(user_id: 9, content: '')

taylor1 = Bleat.create(user_id: 10, content: '')
taylor2 = Bleat.create(user_id: 10, content: '')
taylor3 = Bleat.create(user_id: 10, content: '')
