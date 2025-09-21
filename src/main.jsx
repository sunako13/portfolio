import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router"
import { App } from "@src/App"

createRoot( document.getElementById( "root" ) ).render( (
	<BrowserRouter>
		<App />
	</BrowserRouter>
) )
