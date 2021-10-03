class CreateCountries < ActiveRecord::Migration[6.0]
  def change
    create_table :countries do |t|
      t.string :question
      t.string :type
      t.string :options_id
      t.string :status
      t.string :correctAnswer
      t.text :info
      t.text :lik

      t.timestamps
    end
    add_index :countries, :options_id
  end
end
