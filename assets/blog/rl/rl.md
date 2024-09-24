## 1. What is an Environment in RL?

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

## 2. States: The Snapshot of the Environment

What exactly is a state in RL? The state space $\mathcal{S}$ represents all possible situations the environment can be in:

$$ \mathcal{S} = \{s_1, s_2, s_3, \ldots\} $$

Each state $s \in \mathcal{S}$ provides a complete description of the environment at a particular moment in time. It includes all the information necessary for the agent to make a decision.

But this raises an important question: Can the agent always perceive the complete state of the environment?

I think s in S should be s_i in S right?

Can I get an example or analogy for the difference between state and environment?

Is state basically the full environment at a particular time t?

## 3. Observations: The Agent's Window to the World

In many real-world scenarios, the agent cannot directly access the full state of the environment. Instead, it receives an observation $o$, which is partial information about the environment's state:

$$ o = f(s), \text{ where } o \subseteq s \text{ and } s \in \mathcal{S} $$

Here, $f$ is a function that maps the true state to an observation, potentially losing information in the process.

This distinction between states and observations leads us to an important concept in RL: the difference between the true environment and the agent's perception.

Why is o lowercase? Is it because just like we have s_i in S we have o_i in O where O is a subset of S?

Make the function consistent with full RL defn.

## 4. The True Environment vs. Agent's Perception

How does what the agent perceives differ from the actual state of the environment? This concept is similar to the distinction between $y$ (true value) and $\hat{y}$ (estimated value) in supervised learning or statistics.

### True Environment (y):
$$ \mathcal{E} = (\mathcal{S}, \mathcal{A}, \mathcal{R}, \mathcal{P}) $$

### Agent's Perception (ŷ):
- Observations: $o = f(s)$, where $s \in \mathcal{S}$
- Learned World Model: $M = (\hat{\mathcal{S}}, \mathcal{A}, \hat{\mathcal{R}}, \hat{\mathcal{P}})$

The agent must learn and make decisions based on its observations and learned model, which may not perfectly reflect the true environment.


This could use an analogy, example, more explanation.

But how does the agent interact with this environment over time?

## 5. Actions: The Agent's Toolkit

The action space $\mathcal{A}$ represents all possible actions an agent can take:

$$ \mathcal{A} = \{a_1, a_2, a_3, \ldots\} $$

Actions can be:
1. Discrete: $\mathcal{A} = \{a_1, a_2, a_3, \ldots\}$
2. Continuous: $\mathcal{A} = \{a \in \mathbb{R}^n \mid a_{\text{min}} \leq a \leq a_{\text{max}}\}$

The nature of the action space significantly impacts how the agent learns and makes decisions. But what happens after the agent takes an action?

## 6. Transitions: The Dynamics of the Environment

The transition probability function $\mathcal{P}$ defines how the environment changes in response to the agent's actions:

$$ \mathcal{P}: \mathcal{S} \times \mathcal{A} \times \mathcal{S} \rightarrow [0, 1] $$

It gives the probability of moving from one state to another given an action. Transitions can be:

1. Deterministic: $s_{t+1} = f(s_t, a_t)$
2. Stochastic: $s_{t+1} \sim \mathcal{P}(\cdot | s_t, a_t)$

Here, $s_{t+1}$ (also sometimes denoted as $s'$) represents the next state after taking action $a_t$ in state $s_t$.

But how does the agent know if its actions are good or bad?

Why are transitions probabilistic?

## 7. Rewards: The Feedback Mechanism

The reward function $\mathcal{R}$ provides feedback to the agent about its actions:

$$ \mathcal{R}: \mathcal{S} \times \mathcal{A} \times \mathcal{S} \rightarrow \mathbb{R} $$

It assigns a numerical value to the transition from one state to another after taking an action:

$$ r_t = \mathcal{R}(s_t, a_t, s_{t+1}) $$

This feedback is crucial for the agent to learn which actions are beneficial and which are not.

Now that we understand the basic components of an environment, how do they work together over time?

## 8. Trajectory and History: Capturing the Agent's Journey

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

# memory

If we have a history, we need some way to represent what we/the agent remembers and what it doesn't. The agent can internally keep a track of the history or just infer it from the environment through observation.

## 9. The Markov Property and Its Implications

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

## 10. The Role of History in Different Settings

### In MDPs:
Theoretically, the current state is sufficient, and history is not needed for optimal decision-making. However, history can still be useful for learning and updating the policy or value function.

### In POMDPs:
History is crucial for maintaining a belief state and making informed decisions. The agent uses history to approximate the true state:

$$ \hat{s}_t = g(h_t) $$

Where $g$ is a function that estimates the current state based on history, often implemented through recurrent neural networks or other memory mechanisms.

But how can an agent use its experiences to build a model of the environment?

## 11. World Models: Bridging the Gap

The world model $M = (\hat{\mathcal{S}}, \mathcal{A}, \hat{\mathcal{R}}, \hat{\mathcal{P}})$ is the agent's learned approximation of the true environment $\mathcal{E}$.

### Learning the World Model:
The agent uses its history of interactions to learn the world model:

$$ \hat{\mathcal{P}}(s_{t+1}|s_t,a_t) \approx \frac{\text{count}(s_t, a_t, s_{t+1})}{\text{count}(s_t, a_t)} $$
$$ \hat{\mathcal{R}}(s_t, a_t) \approx \frac{\sum_{(s_t, a_t, r_t) \in \text{history}} r_t}{\text{count}(s_t, a_t)} $$

### Using the World Model:
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

By understanding these connections, we can see how the framework of RL environments provides the foundation for developing intelligent agents capable of learning and adapting in complex, dynamic settings.

