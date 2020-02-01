Rails.application.routes.draw do
  namespace :api do
    namespace :auth do
      post 'registrations/create'
    end
  end
end
