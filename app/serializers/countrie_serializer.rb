class CountrySerializer < ActiveModel::Serializer
    attributes 
    :id,
    :question,
    :type,
    :status,
    :answer_option
   has_one :answer_option
end
