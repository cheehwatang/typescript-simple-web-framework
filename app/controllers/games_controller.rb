require 'json'
require "open-uri"

class GamesController < ApplicationController
  def new
    session[:score] = 0 if session[:score].nil?

    @score = session[:score]
    @letters = []
    10.times { @letters << ('A'..'Z').to_a.sample }
  end

  def reset_score
    session[:score] = 0
    redirect_to '/new'
  end

  def score
    @letters = params[:letters].split(',')
    @answer = params[:answer]
    url = "https://wagon-dictionary.herokuapp.com/#{@answer}"
    api_response = URI.open(url).read
    dictionary_data = JSON.parse(api_response)

    @found = dictionary_data['found']

    @missing_letters = false
    @answer.upcase.each_char do |letter|
      index = @letters.index(letter)
      if index.nil?
        @missing_letters = true
      else
        @letters.delete_at(index)
      end
    end

    if @found && !@missing_letters
      session[:score] = session[:score].to_i + @answer.length ** 2
    end
  end
end
