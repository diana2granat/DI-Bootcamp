sample_dict = { 
   "class":{ 
      "student":{ 
         "name":"Mike",
         "marks":{ 
            "physics":70,
            "history":80
         }
      }
   }
}
history_mark = sample_dict["class"]["student"]["marks"]["history"]
print("History mark:", history_mark)