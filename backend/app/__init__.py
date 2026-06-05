import sys
if sys.version_info < (3, 11):
    import datetime
    datetime.UTC = datetime.timezone.utc

    import enum
    class StrEnum(str, enum.Enum):
        pass
    enum.StrEnum = StrEnum
