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


def transform_date(default_date: str) -> str:
    start_string = str(default_date)[:10]
    DD = start_string[8:10]
    MM = start_string[5:7]
    YYYY = start_string[:4]
    result_string = DD+'.'+MM+'.'+YYYY
    return result_string
