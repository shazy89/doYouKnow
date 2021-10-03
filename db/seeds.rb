# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Country.create(
  question:
    'What country is split into 443 named islands and also holds the territory of Greenland?',
  type: '',
  status: 'pending',
  correctAnswer: 'Denmark',
  info:
    'European Denmark, which is the southernmost of the Scandinavian countries, consists of a peninsula, Jutland, and an archipelago of 443 named islands, with the largest being Zealand, Funen and the North Jutlandic Island.',
  lik: 'link',
)

# t.string :options_id
