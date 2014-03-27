class Resource < ActiveRecord::Base
  belongs_to :resource_type
  has_and_belongs_to_many :events

  validates :text, presence: true
  validates :color, presence: true
  validates :resource_type, presence: true
  paginates_per 10

  private

  def resource_params
    params.require(:resource).permit(:text, :value, :color, :resource_type_id)
  end
end
