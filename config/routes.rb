Rails.application.routes.draw do
  get 'games/new'

  root to: 'games#new'
  get 'new', to: 'games#new'
  get 'reset_score', to: 'games#reset_score'
  post 'score', to: 'games#score'
  get 'score', to: 'games#new'
end
