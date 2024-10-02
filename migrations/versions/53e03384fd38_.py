"""empty message

Revision ID: 53e03384fd38
Revises: 1f93799bc836
Create Date: 2024-10-02 20:07:21.567464

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '53e03384fd38'
down_revision = '1f93799bc836'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('todo', schema=None) as batch_op:
        batch_op.drop_constraint('todo_user_id_fkey', type_='foreignkey')
        batch_op.create_foreign_key(None, 'user', ['user_id'], ['id'], ondelete='CASCADE')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('todo', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.create_foreign_key('todo_user_id_fkey', 'user', ['user_id'], ['id'])

    # ### end Alembic commands ###