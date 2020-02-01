require_dependency 'api/application_controller'

module Api
  module Auth
    class RegistrationsController < Api::ApplicationController
      skip_before_action :authenticate_user

      def create
        FirebaseIdToken::Certificates.request
        raise ArgumentError, 'BadRequest Parameter' if payload.blank?
        @user = User.new(uid: payload[:user_id])

        if @user.save
          render json: @user, status: :ok
        else
          render json: @user.errors, status: :unprocessable_entity
        end
      end

      private

        def payload
          @payload ||= FirebaseIdToken::Signature.verify token
        end

        def token
          params[:token] || token_from_request_headers
        end

        def token_from_request_headers
          request.headers['Authorization']&.split&.last
        end
    end
  end
end
