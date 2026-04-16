-- Idempotency log for Stripe webhook deliveries.
-- Stripe retries failed webhooks and may also deliver the same event twice;
-- we record each processed event.id and skip it on repeat delivery.

create table if not exists public.stripe_events (
    id text primary key,
    type text not null,
    received_at timestamptz not null default now()
);

alter table public.stripe_events enable row level security;

-- No policies: the service role bypasses RLS, and no one else should read this table.
-- (Absence of policies under RLS means authenticated/anon users get zero rows.)
