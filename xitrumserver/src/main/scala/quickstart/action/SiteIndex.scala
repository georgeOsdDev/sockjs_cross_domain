package quickstart.action

import xitrum.annotation.{GET,POST,SOCKJS}
import xitrum.{Action,SockJsAction,SockJsText,SkipCsrfCheck}


@GET("")
class SiteIndex extends DefaultLayout {
  def execute() {
    respondView()
  }
}

@SOCKJS("echo")
class SockJsChatActor extends SockJsAction {
  def execute() {
  	respondSockJsText("server-to-client")
    context.become {
      case SockJsText(text) =>
        respondSockJsText(text)
    }
  }
}

@POST("post")
class PostActor extends Action with SkipCsrfCheck {
   def execute() {
     respondText("ok")
   }
}