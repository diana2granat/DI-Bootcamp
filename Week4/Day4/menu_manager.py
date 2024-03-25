class MenuManager:

    @classmethod
    def get_by_name(cls, cursor, item_name):
        query = f'''
        SELECT * FROM menuitems
        WHERE item_name = '{item_name}'
        '''
        cursor.execute(query)
        item = cursor.fetchone()
        if item:
            return item
        else:
            return None

    @classmethod
    def all(cls, cursor):
        query = '''
        SELECT * FROM menuitems
        '''
        cursor.execute(query)
        items = cursor.fetchall()
        return items