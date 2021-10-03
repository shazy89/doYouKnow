class CreateHistories < ActiveRecord::Migration[6.0]
  def change
    create_table :histories do |t|
      t.string :question
      t.string :type
      t.string :options_id
      t.string :status
      t.string :correctAnswer
      t.text :info
      t.text :lik

      t.timestamps
    end
    add_index :histories, :options_id
  end
end
