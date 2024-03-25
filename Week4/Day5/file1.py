# id_google_sheet = '1rCkekA1zHOJH2Jzi0Uo27RaG8EFHfiw2WqOAYTFkPuk'

from googleapiclient.discovery import build

# Google API credentials (API key or OAuth client ID)
api_key = 'AIzaSyDCNxnaQH5fl5CAs6fRtZcF7OCA0BP3efc'  # Replace with your API key

# ID of the Google Sheet you want to access
sheet_id = '1rCkekA1zHOJH2Jzi0Uo27RaG8EFHfiw2WqOAYTFkPuk'  # Replace with your Google Sheet ID

# Range of cells to retrieve data from (e.g., A1:B10)
range_name = 'Sheet1!A5:C'  # Replace with your range

# Create a service object for interacting with the Google Sheets API
service = build('sheets', 'v4', developerKey=api_key)

# Call the Sheets API to get values from the specified range
result = service.spreadsheets().values().get(
    spreadsheetId=sheet_id,
    range=range_name
).execute()

# Extract values from the response
values = result.get('values', [])

# Print retrieved values
if not values:
    print('No data found.')
else:
    print('Data:')
    for row in values:
        print(row)
