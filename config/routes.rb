Rails.application.routes.draw do
  get "/", to: "peoples#index"
end
