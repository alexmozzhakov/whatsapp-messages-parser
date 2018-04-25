# WhatsApp messages parser
Parse WhatsApp messages .txt log to JSON format


```
[12/10/2017, 17:09:06] Group: ‎Messages to this group are now secured with end-to-end encryption.
[12/10/2017, 17:09:19] Alexey: Hello world
[12/10/2017, 17:09:25] Alexey: Want a little mess?
follow me
[12/10/2017, 17:09:19] Jeez: Well, gee 
```

→

```
[
  {
    "date": "12/10/2017, 17:09:06",
    "sender": "Group",
    "message": "‎Messages to this group are now secured with end-to-end encryption."
  },
  {
    "date": "12/10/2017, 17:09:19",
    "sender": "Alexey",
    "message": "Hello world"
  },
  {
    "date": "12/10/2017, 17:09:25",
    "sender": "Alexey",
    "message": "Want a little mess?\nfollow me"
  },
  {
    "date": "12/10/2017, 17:09:19",
    "sender": "Jeez",
    "message": "Well, gee "
  }
]
```
