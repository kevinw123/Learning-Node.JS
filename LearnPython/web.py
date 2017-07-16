import webbrowser
import sys

if len(sys.argv) > 1:
	search = '+'.join(sys.argv[1:])
webbrowser.open('http://google.ca/#q=' + search )