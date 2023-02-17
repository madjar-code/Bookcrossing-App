from collections import defaultdict
from django.db.models.query import QuerySet


def check_user_for_avatars(users: QuerySet) -> dict:
    statistics: dict = {
        'с аватарками': 0,
        'без аватарок': 0
    }
    for user in users:
        if user.avatar.name:
            statistics['с аватарками'] += 1
        else:
            statistics['без аватарок'] += 1
    return statistics

# Список имен и псевдонимов различных городов. Первый
# элемент в каждом кортеже - главное название города
CITY_NAMES = [
    ('москва', 'мск'), ('санкт-петербург', 'петербург', 'питер'),
    ('балашиха', ), ('троицк', )
]


def name_check(address: str) -> str:
    """
    Проверка на наличие какого-то из городов
    списка CITY_NAMES в нашем адресе
    """
    if not address:
        return 'не указано'
    for names_of_one_city in CITY_NAMES:
        for name in names_of_one_city:
            if name in address.lower():
                return names_of_one_city[0]
    return 'другое'


def address_analysis(users: QuerySet) -> defaultdict:
    """Генерация статистики по пользователям"""
    statistics = defaultdict(lambda: 0)

    for user in users:
        city_name = name_check(user.address)
        statistics[city_name] += 1

    return statistics