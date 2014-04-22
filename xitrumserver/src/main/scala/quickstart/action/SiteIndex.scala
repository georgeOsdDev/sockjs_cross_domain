package quickstart.action

import xitrum.annotation.{GET,SOCKJS}
import xitrum.{SockJsAction,SockJsText}


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