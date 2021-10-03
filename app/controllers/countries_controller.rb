class CountriesController < ApplicationController
  # GET /users
  def index
    @countries = Country.all

    render json: @countries
  end
end
