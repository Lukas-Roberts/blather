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
iliza = User.create(username: 'anElderMillenial', password: password, email: 'elderiliza@gmail.com', first_name: 'Iliza', last_name: 'Schlesinger')
tiff = User.create(username: 'ohSheReady', password: password, email: 'tiffhaddish@gmail.com', first_name: 'Tiffany', last_name: 'Haddish')
sarah = User.create(username: 'theRealSJP', password: password, email: 'sarahjessica@gmail.com', first_name: 'Sarah', last_name: 'JessicaParker')
zen = User.create(username: 'ZENDAYA', password: password, email: 'zendaya@gmail.com', first_name: 'Zendaya', last_name: 'Unknown')
finn = User.create(username: 'tooFinn', password: password, email: 'finnwolfy@gmail.com', first_name: 'Finn', last_name: 'Wolfhart')
jimmy = User.create(username: 'whereIsJustin', password: password, email: 'jimmyfallon@gmail.com', first_name: 'Jimmy', last_name: 'Fallon')
taylor = User.create(username: 'wolfNotShark', password: password, email: 'secondtaylor@gmail.com', first_name: 'Taylor', last_name: 'Lautner')