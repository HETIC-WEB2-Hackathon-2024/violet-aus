print_help() {
	echo "Available actions:"
	echo "  install                Install dependencies"
	echo "  all                    Run all the services at once"
	echo "  run-frontend           Run the frontend"
	echo "  run-web-service        Run the web service"
}

install_dependencies() {
	(cd frontend && npm install) & (cd web-service && npm i)
}

run_frontend() {
	cd frontend && npm run dev

	wait
}

run_web_service() {
	cd web-service && npm run dev

	wait
}

run_all() {
	install_dependencies
	run_frontend &
	run_web_service

	wait
}

case "$1" in
install)
	install_dependencies
	;;
run-frontend)
	run_frontend
	;;
run-web-service)
	run_web_service
	;;
all)
	run_all
	;;
*)
	print_help
	;;
esac

# Made with ❤