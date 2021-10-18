from typing import Text
from django.db import models
from chat.models import Chat

# Create your models here.

class ChatMessage(models.Model):
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE, related_name="messages")
    userName = models.CharField(max_length=120)
    text = models.TextField()

    def __str__(self) -> str:
        return f"{self.chat.room_name}-{self.userName} "