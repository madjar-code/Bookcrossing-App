from rest_framework import permissions


class IsJWTAuthenticated(permissions.BasePermission):
	"""
	Custom permission to my jwt-authentication.
	"""

	def has_object_permission(self, request, view, obj):
		if request.user:
			return True
		return False