from dataclasses import dataclass, field
from datetime import datetime
from decimal import Decimal
from uuid import UUID

from pay.sprint.sprint.storage.entities.base import Entity, autogenerate_uuid


@dataclass
class SprintStoryResource(Entity):
    resource_type_id: UUID
    sprint_id: UUID
    story_id: UUID
    amount: Decimal
    sprint_story_resource_id: UUID = field(metadata=autogenerate_uuid(), default=None)
    created: datetime = field(default=None)
    updated: datetime = field(default=None)
