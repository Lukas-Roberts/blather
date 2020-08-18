class ApplicationController < ActionController::API

    def log_in(user)
        session[:user_id] = user.id
        user.getFeed
    end

end
