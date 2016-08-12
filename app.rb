require 'sinatra'
require 'slim'

get '/' do
  slim :index
end

__END__

@@index
doctype html
html lang="en" ng-app="app"
  head
  body
    ui-view
    script src="app.js" type="text/javascript"
  /! Host: #{Socket.gethostname}
