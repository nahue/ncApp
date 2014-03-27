class Share < ActiveRecord::Base
  belongs_to :from, :class_name => "User", :foreign_key => "from_user_id"
  belongs_to :to, :class_name => "User", :foreign_key => "to_user_id"

  validates :to_email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }
end
