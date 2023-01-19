import random, string


def create_slug(prefix, model_class, length=8) -> str:
    """Slug creation."""
    letters = string.ascii_letters
    code = ''.join(
        random.choice(letters)\
        for _ in range(length)
    )
    slug = prefix + '-' + code
    if model_class.objects.filter(slug=slug).exists():
        return create_slug(prefix, model_class)
    return slug