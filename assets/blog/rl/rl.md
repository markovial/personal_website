<!-- level: 1 -->

## Agents

An RL agent is an entity that interacts with an environment to learn optimal behavior.

But what exactly constitutes an agent? Let's break it down mathematically:

$$ A = (S, A, \pi, \gamma) $$

Where:
- $S$: State Space
- $A$: Action Space
- $\pi$: Policy (learned)
- $\gamma$: Discount Factor

This tuple represents the core components of an agent. But what do each of these mean, and how do they work together?

### State Space

The state space $S$ is the set of all possible situations the agent might encounter:

$$ S = \{s_1, s_2, s_3, \ldots, s_n\} $$

Each $s_i$ represents a unique state. Think of it as the agent's perception of its environment at any given moment. For example, in a chess game, a state would be the current configuration of all pieces on the board.

But how does the agent interact with its environment based on these states?

### Action Space

The action space $A$ is the set of all possible actions the agent can take:

$$ A = \{a_1, a_2, a_3, \ldots, a_m\} $$

Each $a_j$ represents a unique action. Continuing our chess example, an action would be moving a specific piece to a specific square.

Now that we know what the agent can perceive (states) and what it can do (actions), how does it decide which action to take in each state?

### Policy

The policy $\pi$ is the agent's strategy, mapping states to actions:

$\pi: S \rightarrow A$

It can be:
1. Deterministic: $a_t = \mu(s_t)$
2. Stochastic: $a_t \sim \pi(\cdot | s_t)$

A deterministic policy always chooses the same action for a given state, while a stochastic policy assigns probabilities to actions.

But why would an agent choose one action over another? This brings us to the concept of rewards and long-term planning.

### Discount Factor

The discount factor $\gamma$ determines how much the agent values future rewards compared to immediate ones:

$$ 0 \leq \gamma \leq 1 $$

A higher $\gamma$ means the agent is more forward-thinking, valuing future rewards more heavily. This is crucial because in many scenarios, the best long-term strategy might involve sacrificing immediate rewards for greater future gains.

Now that we understand the basic components of an agent, how does it actually learn and improve its behavior?

### Learning Process

Agents learn through interaction with their environment. This process is guided by a learning algorithm (L). We can expand our agent tuple to include this:

$$ A = (S, A, \pi, \gamma, L) $$

But what does it mean for an agent to "learn"? In essence, learning in RL typically involves updating the policy $\pi$ or estimating value functions (which we'll discuss later). This often translates to adjusting parameters in neural networks or other function approximators.

Different types of agents use different learning algorithms. For example, in Q-learning:

$$ Q(s, a) \leftarrow Q(s, a) + \alpha [R_{t+1} + \gamma \max_{a'} Q(S_{t+1}, a') - Q(s, a)] $$

This update rule adjusts the estimated value of taking action $a$ in state $s$ based on the reward received and the estimated value of the next state.

But how does the agent know if it's doing well or poorly? This brings us to the concept of rewards.

### Reward

To learn, agents need feedback. This comes in the form of a reward function:

$$ R: S \times A \times S \rightarrow \mathbb{R} $$

The reward function assigns a numerical value to the transition from one state to another after taking an action:

$$ r_t = R(s_t, a_t, s_{t+1}) $$

This is how the environment communicates to the agent whether its actions are good or bad.

Given this feedback mechanism, how do we measure the overall performance of an agent?

### Measuring Agent Performance

We typically measure agent performance by the expected cumulative reward:

$$ \text{Performance}(A) = \mathbb{E} \left[ \sum_{t=0}^{T} \gamma^t R_t \right] $$

We use the expected value because the environment and/or the agent's policy might be stochastic, leading to different outcomes even with the same starting conditions. We sum the rewards because we're interested in the agent's performance over time, not just in a single moment.

But how does the agent estimate the long-term value of its actions? This brings us to the concept of value functions.


### Value Functions

Agents often learn value functions to estimate the long-term reward of being in a state or taking an action:

1. State-Value Function: $V: S \rightarrow \mathbb{R}$
   $$ V(s) = \mathbb{E}[G_t | S_t = s] = \mathbb{E} \left[ \sum_{k=0}^{\infty} \gamma^k R_{t+k+1} \Bigg| S_t = s \right] $$

2. Action-Value Function: $Q: S \times A \rightarrow \mathbb{R}$
   $$ Q(s, a) = \mathbb{E}[G_t | S_t = s, A_t = a] = \mathbb{E} \left[ \sum_{k=0}^{\infty} \gamma^k R_{t+k+1} \Bigg| S_t = s, A_t = a \right] $$

The key difference is that the state-value function $V(s)$ estimates the expected return from being in state $s$ and following the current policy thereafter, while the action-value function $Q(s,a)$ estimates the expected return from taking action $a$ in state $s$ and then following the current policy.

Now that we understand these fundamental concepts, let's explore different types of RL agents and how they approach the learning problem.



<!-- level: 3 -->
### Types of RL Agents

RL algorithms can be categorized in several ways. One fundamental distinction is between model-based and model-free methods:

#### Model-Based Agents

These agents learn a model of their environment:

$$ A_{mb} = (S, A, \hat{R}, \hat{P}, \pi: S \rightarrow A, \gamma, L_{mb}, PA) $$

Where:
- $\hat{R}: S \times A \times S \rightarrow \mathbb{R}$: Estimated Reward Function
- $\hat{P}: S \times A \times S \rightarrow [0, 1]$: Estimated Transition Probability Function
- $PA$: Planning Algorithm

Model-based agents try to learn how the environment works ($\hat{P}$ and $\hat{R}$) and use this knowledge to plan their actions.

#### Model-Free Agents

These agents learn directly from experience without building an explicit model:

$$ A_{mf} = (S, A, \pi: S \rightarrow A, \gamma, L_{mf}) $$

Model-free agents focus on learning values or policies directly from experience, without trying to model the environment's dynamics.

Another important distinction is between value-based and policy-based methods:

#### Value-Based Agents

These agents learn a value function (either V or Q) and derive their policy from it:

$$ A_{value} = (S, A, \pi: S \rightarrow A, \gamma, L_{value}, V: S \rightarrow \mathbb{R}) $$
or
$$ A_{value} = (S, A, \pi: S \rightarrow A, \gamma, L_{value}, Q: S \times A \rightarrow \mathbb{R}) $$

#### Policy-Based Agents

These agents directly learn a policy without necessarily learning a value function:

$$ A_{policy} = (S, A, \pi: S \rightarrow A, \gamma, L_{policy}) $$

#### Actor-Critic Agents

These combine aspects of both value-based and policy-based methods:

$$ A_{ac} = (S, A, \pi, \gamma, \pi_{actor}: S \rightarrow A, V_{critic}: S \rightarrow \mathbb{R}, L_{ac}) $$

Actor-Critic methods maintain both a policy (the actor) and a value function (the critic), using the critic to update the actor.

Finally, we can distinguish between on-policy and off-policy methods:

#### On-Policy Agents

These agents learn about the policy they're currently following:

$$ A_{on\_policy} = (S, A, \pi: S \rightarrow A, \gamma, L_{on\_policy}) $$

#### Off-Policy Agents

These agents can learn about a policy different from the one they're following:

$$ A_{off\_policy} = (S, A, \pi: S \rightarrow A, \gamma, L_{off\_policy}) $$

Understanding these different types of agents and algorithms is crucial for choosing the right approach for a given problem. But how can we improve the performance of these agents?

#### Improving Agent Performance

There are several strategies for enhancing agent performance:

1. Better Learning Algorithms: For example, Double Q-learning to reduce overestimation bias:

   $$ Q_1(s, a) \leftarrow Q_1(s, a) + \alpha [r + \gamma Q_2(s', \arg\max_{a'} Q_1(s', a')) - Q_1(s, a)] $$
   $$ Q_2(s, a) \leftarrow Q_2(s, a) + \alpha [r + \gamma Q_1(s', \arg\max_{a'} Q_2(s', a')) - Q_2(s, a)] $$

2. Experience Replay: Storing and reusing past experiences to improve sample efficiency.

3. Prioritized Experience Replay: Sampling important experiences more frequently:

   $$ P(i) = \frac{|\delta_i| + \epsilon}{\sum_k (|\delta_k| + \epsilon)} $$

   Where $P(i)$ is the probability of sampling experience $i$, $\delta_i$ is the TD error of experience $i$, and $\epsilon$ is a small constant.

4. Function Approximation: Using neural networks to handle large state spaces.

5. Exploration Strategies: Balancing exploration and exploitation to discover optimal policies.

These techniques help address various challenges in RL, such as sample efficiency, stability of learning, and scalability to complex environments.




























<!-- level: 1 -->

## Environments

In reinforcement learning (RL), an environment is the external system in which an agent operates and interacts. But how do we formally define this concept? An environment in RL can be represented as a tuple:

$$ \mathcal{E} = (\mathcal{S}, \mathcal{A}, \mathcal{R}, \mathcal{P}) $$

Where:
- $\mathcal{S}$: Set of all possible states
- $\mathcal{A}$: Set of all possible actions
- $\mathcal{R}$: Reward function
- $\mathcal{P}$: Transition probability function

How does this environment definition relate to agents? Agents are:

$$ \mathcal{A} = (S, A, \pi, \gamma, L) $$

The environment $\mathcal{E}$ defines the rules and dynamics, while the agent $\mathcal{A}$ defines the decision-making entity. The agent operates within the constraints set by the environment.

Now that we understand the basic structure of an environment, let's delve deeper into each component.

### States

What exactly is a state in RL? The state space $\mathcal{S}$ represents all possible situations the environment can be in:

$$ \mathcal{S} = \{s_1, s_2, s_3, \ldots\} $$

Each state $s \in \mathcal{S}$ provides a complete description of the environment at a particular moment in time. It includes all the information necessary for the agent to make a decision.

But this raises an important question: Can the agent always perceive the complete state of the environment?

I think s in S should be s_i in S right?

Can I get an example or analogy for the difference between state and environment?

Is state basically the full environment at a particular time t?

### Observations

In many real-world scenarios, the agent cannot directly access the full state of the environment. Instead, it receives an observation $o$, which is partial information about the environment's state:

$$ o = f(s), \text{ where } o \subseteq s \text{ and } s \in \mathcal{S} $$

Here, $f$ is a function that maps the true state to an observation, potentially losing information in the process.

This distinction between states and observations leads us to an important concept in RL: the difference between the true environment and the agent's perception.

Why is o lowercase? Is it because just like we have s_i in S we have o_i in O where O is a subset of S?

Make the function consistent with full RL defn.

### The True Environment vs. Agent's Perception

How does what the agent perceives differ from the actual state of the environment? This concept is similar to the distinction between $y$ (true value) and $\hat{y}$ (estimated value) in supervised learning or statistics.

### True Environment (y):

$$ \mathcal{E} = (\mathcal{S}, \mathcal{A}, \mathcal{R}, \mathcal{P}) $$

### Agent's Perception (ŷ):
- Observations: $o = f(s)$, where $s \in \mathcal{S}$
- Learned World Model: $M = (\hat{\mathcal{S}}, \mathcal{A}, \hat{\mathcal{R}}, \hat{\mathcal{P}})$

The agent must learn and make decisions based on its observations and learned model, which may not perfectly reflect the true environment.

This could use an analogy, example, more explanation.

But how does the agent interact with this environment over time?




### Actions

The action space $\mathcal{A}$ represents all possible actions an agent can take:

$$ \mathcal{A} = \{a_1, a_2, a_3, \ldots\} $$

Actions can be:
1. Discrete: $\mathcal{A} = \{a_1, a_2, a_3, \ldots\}$
2. Continuous: $\mathcal{A} = \{a \in \mathbb{R}^n \mid a_{\text{min}} \leq a \leq a_{\text{max}}\}$

The nature of the action space significantly impacts how the agent learns and makes decisions. But what happens after the agent takes an action?

### Transitions

The transition probability function $\mathcal{P}$ defines how the environment changes in response to the agent's actions:

$$ \mathcal{P}: \mathcal{S} \times \mathcal{A} \times \mathcal{S} \rightarrow [0, 1] $$

It gives the probability of moving from one state to another given an action. Transitions can be:

1. Deterministic: $s_{t+1} = f(s_t, a_t)$
2. Stochastic: $s_{t+1} \sim \mathcal{P}(\cdot | s_t, a_t)$

Here, $s_{t+1}$ (also sometimes denoted as $s'$) represents the next state after taking action $a_t$ in state $s_t$.

But how does the agent know if its actions are good or bad?

Why are transitions probabilistic?

### Rewards

The reward function $\mathcal{R}$ provides feedback to the agent about its actions:

$$ \mathcal{R}: \mathcal{S} \times \mathcal{A} \times \mathcal{S} \rightarrow \mathbb{R} $$

It assigns a numerical value to the transition from one state to another after taking an action:

$$ r_t = \mathcal{R}(s_t, a_t, s_{t+1}) $$

This feedback is crucial for the agent to learn which actions are beneficial and which are not.

Now that we understand the basic components of an environment, how do they work together over time?

### Trajectory and History

As the agent interacts with the environment, it generates a sequence of states, actions, and rewards. This sequence can be viewed from two perspectives:

### Trajectory:

A trajectory $\tau$ represents a specific sequence of true states and actions:
$$ \tau = (s_0, a_0, s_1, a_1, \ldots, s_T) $$

### History:

History $h_t$ captures the sequence of observations, actions, and rewards up to time $t$:
$$ h_t = (o_0, a_0, r_1, o_1, a_1, r_2, \ldots, o_t) $$

The key difference is that trajectory deals with true states (often unknown to the agent), while history deals with observations (what the agent actually perceives).

Is this distinction between trajectory and history actually true? Or how these words are commonly used in literature?

But how does the past influence the future in RL environments?

<!-- level: 3 -->
## Memory

If we have a history, we need some way to represent what we/the agent remembers and what it doesn't. The agent can internally keep a track of the history or just infer it from the environment through observation.

## Markov Property

The Markov property states that the future depends only on the current state, not on the history:

$$ P(s_{t+1} | s_t, a_t) = P(s_{t+1} | s_1, a_1, s_2, a_2, \ldots, s_t, a_t) $$

This property leads to two important types of decision processes:

What is a decision process?


### Markov Decision Processes (MDPs):
In fully observable MDPs, the current observation (which equals the true state) is sufficient for optimal decision-making.

### Partially Observable Markov Decision Processes (POMDPs):
In POMDPs, the true state is Markovian, but the observations are not. The agent must use history to infer the current state, often through a belief state:

$$ b(s) = P(s | h_t) $$

How does this distinction affect the agent's decision-making process?


## History Part 2

### In MDPs:
Theoretically, the current state is sufficient, and history is not needed for optimal decision-making. However, history can still be useful for learning and updating the policy or value function.

### In POMDPs:
History is crucial for maintaining a belief state and making informed decisions. The agent uses history to approximate the true state:

$$ \hat{s}_t = g(h_t) $$

Where $g$ is a function that estimates the current state based on history, often implemented through recurrent neural networks or other memory mechanisms.

But how can an agent use its experiences to build a model of the environment?


## World Models

The world model $M = (\hat{\mathcal{S}}, \mathcal{A}, \hat{\mathcal{R}}, \hat{\mathcal{P}})$ is the agent's learned approximation of the true environment $\mathcal{E}$.

Learning the World Model:
The agent uses its history of interactions to learn the world model:

$$ \hat{\mathcal{P}}(s_{t+1}|s_t,a_t) \approx \frac{\text{count}(s_t, a_t, s_{t+1})}{\text{count}(s_t, a_t)} $$
$$ \hat{\mathcal{R}}(s_t, a_t) \approx \frac{\sum_{(s_t, a_t, r_t) \in \text{history}} r_t}{\text{count}(s_t, a_t)} $$

Using the World Model:
The learned model allows the agent to simulate trajectories and plan actions without interacting with the true environment.

How do all these components come together in the agent's decision-making process?

## 12. Connecting the Dots: From Observations to Decision-Making

1. The agent receives an observation $o_t = f(s_t)$ of the true state $s_t$.
2. It updates its history: $h_t = h_{t-1} \cup (o_t, a_{t-1}, r_t)$.
3. In POMDPs, it updates its belief state: $b(s) = P(s | h_t)$.
4. It uses its policy $\pi$, which may depend on the history or belief state, to choose an action: $a_t = \pi(h_t)$ or $a_t = \pi(b(s))$.
5. The environment transitions to a new true state according to $\mathcal{P}(s_{t+1}|s_t, a_t)$.
6. The cycle repeats, generating a trajectory in the true environment and a history from the agent's perspective.


## The Interplay of Environments and Agents

Understanding RL environments involves grasping the distinction between the true environment and the agent's perception and learning. The concepts of states, observations, actions, transitions, rewards, history, and trajectories are all interconnected, each playing a crucial role in how the agent learns and makes decisions in the face of uncertainty and partial observability.

Different types of agents (value-based, policy-based, model-based) are designed to excel in different types of environments (fully observable, partially observable, deterministic, stochastic). The environment provides the context, rules, and feedback, while the agent develops strategies to maximize its performance within these constraints.

