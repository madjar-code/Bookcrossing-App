import json, time


class RequestTimeMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
    
    def __call__(self, request):
        timestamp = time.monotonic()
        response = self.get_response(request)
        data = {
            'path': request.path,
            'request_total': round(time.monotonic() - timestamp, 3),
            'status_code': response.status_code,
        }

        with open('request.log', 'a') as file:
            file.write(json.dumps(data) + '\n')

        return response