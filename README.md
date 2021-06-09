# translate-data

An API that takes an input of translated scripts (array of strings) and outputs formatted JSON data. 

The API detects and separates out the data into:

* Metadata
* English 
* Persian

**For example**, this input data:

```json
["This is very futuristic.""DAVE:", " این خیلی آینده‌نگرانه است..", "Yes", "MARCIE MILLER:", "بله "]
```

Would output:

```
{
    "script": [
        {
            "english": "This is very futuristic.",
            "meta": "DAVE",
            "farsi": " این خیلی آینده‌نگرانه است.."
        },
        {
            "english": "Yes",
            "meta": "MARCIE MILLER",
            "farsi": " بله "
        }
    ]
}
```



## Setup

Clone this repo by running:

```bash
git clone git@github.com:sarahrainbow/translate-data.git
cd translate-data
```



Install dependencies by running:

```
npm install
```



### Request

```
POST /translate
```

Parameters -> body
