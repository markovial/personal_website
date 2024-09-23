- [[#1. What is an RL Agent?|1. What is an RL Agent?]]
- [[#2. The Agent's Perspective: State Space|2. The Agent's Perspective: State Space]]
- [[#3. The Agent's Toolkit: Action Space|3. The Agent's Toolkit: Action Space]]
- [[#4. The Agent's Strategy: Policy|4. The Agent's Strategy: Policy]]
- [[#5. Planning for the Future: Discount Factor|5. Planning for the Future: Discount Factor]]
- [[#6. The Learning Process|6. The Learning Process]]
- [[#7. Feedback Mechanism: Reward|7. Feedback Mechanism: Reward]]
- [[#8. Measuring Agent Performance|8. Measuring Agent Performance]]
- [[#9. Estimating Long-Term Value: Value Functions|9. Estimating Long-Term Value: Value Functions]]
- [[#10. Types of RL Agents|10. Types of RL Agents]]
	- [[#10. Types of RL Agents#10.1 Model-Based Agents|10.1 Model-Based Agents]]
	- [[#10. Types of RL Agents#10.2 Model-Free Agents|10.2 Model-Free Agents]]
	- [[#10. Types of RL Agents#10.3 Value-Based Agents|10.3 Value-Based Agents]]
	- [[#10. Types of RL Agents#10.4 Policy-Based Agents|10.4 Policy-Based Agents]]
	- [[#10. Types of RL Agents#10.5 Actor-Critic Agents|10.5 Actor-Critic Agents]]
	- [[#10. Types of RL Agents#10.6 On-Policy Agents|10.6 On-Policy Agents]]
	- [[#10. Types of RL Agents#10.7 Off-Policy Agents|10.7 Off-Policy Agents]]
- [[#11. Improving Agent Performance|11. Improving Agent Performance]]

## 1. What is an RL Agent?

An RL agent is an entity that interacts with an environment to learn optimal behavior. But what exactly constitutes an agent? Let's break it down mathematically:

$$ A = (S, A, \pi, \gamma) $$

Where:
- $S$: State Space
- $A$: Action Space
- $\pi$: Policy (learned)
- $\gamma$: Discount Factor

This tuple represents the core components of an agent. But what do each of these mean, and how do they work together?

## 2. The Agent's Perspective: State Space

The state space $S$ is the set of all possible situations the agent might encounter:

$$ S = \{s_1, s_2, s_3, \ldots, s_n\} $$

Each $s_i$ represents a unique state. Think of it as the agent's perception of its environment at any given moment. For example, in a chess game, a state would be the current configuration of all pieces on the board.

But how does the agent interact with its environment based on these states?

## 3. The Agent's Toolkit: Action Space

The action space $A$ is the set of all possible actions the agent can take:

$$ A = \{a_1, a_2, a_3, \ldots, a_m\} $$

Each $a_j$ represents a unique action. Continuing our chess example, an action would be moving a specific piece to a specific square.

Now that we know what the agent can perceive (states) and what it can do (actions), how does it decide which action to take in each state?

## 4. The Agent's Strategy: Policy

The policy $\pi$ is the agent's strategy, mapping states to actions:

$\pi: S \rightarrow A$

It can be:
1. Deterministic: $a_t = \mu(s_t)$
2. Stochastic: $a_t \sim \pi(\cdot | s_t)$

A deterministic policy always chooses the same action for a given state, while a stochastic policy assigns probabilities to actions.

But why would an agent choose one action over another? This brings us to the concept of rewards and long-term planning.

## 5. Planning for the Future: Discount Factor

The discount factor $\gamma$ determines how much the agent values future rewards compared to immediate ones:

$$ 0 \leq \gamma \leq 1 $$

A higher $\gamma$ means the agent is more forward-thinking, valuing future rewards more heavily. This is crucial because in many scenarios, the best long-term strategy might involve sacrificing immediate rewards for greater future gains.

Now that we understand the basic components of an agent, how does it actually learn and improve its behavior?

## 6. The Learning Process

Agents learn through interaction with their environment. This process is guided by a learning algorithm (L). We can expand our agent tuple to include this:

$$ A = (S, A, \pi, \gamma, L) $$

But what does it mean for an agent to "learn"? In essence, learning in RL typically involves updating the policy $\pi$ or estimating value functions (which we'll discuss later). This often translates to adjusting parameters in neural networks or other function approximators.

Different types of agents use different learning algorithms. For example, in Q-learning:

$$ Q(s, a) \leftarrow Q(s, a) + \alpha [R_{t+1} + \gamma \max_{a'} Q(S_{t+1}, a') - Q(s, a)] $$

This update rule adjusts the estimated value of taking action $a$ in state $s$ based on the reward received and the estimated value of the next state.

But how does the agent know if it's doing well or poorly? This brings us to the concept of rewards.

## 7. Feedback Mechanism: Reward

To learn, agents need feedback. This comes in the form of a reward function:

$$ R: S \times A \times S \rightarrow \mathbb{R} $$

The reward function assigns a numerical value to the transition from one state to another after taking an action:

$$ r_t = R(s_t, a_t, s_{t+1}) $$

This is how the environment communicates to the agent whether its actions are good or bad.

Given this feedback mechanism, how do we measure the overall performance of an agent?

## 8. Measuring Agent Performance

We typically measure agent performance by the expected cumulative reward:

$$ \text{Performance}(A) = \mathbb{E} \left[ \sum_{t=0}^{T} \gamma^t R_t \right] $$

We use the expected value because the environment and/or the agent's policy might be stochastic, leading to different outcomes even with the same starting conditions. We sum the rewards because we're interested in the agent's performance over time, not just in a single moment.

But how does the agent estimate the long-term value of its actions? This brings us to the concept of value functions.

## 9. Estimating Long-Term Value: Value Functions

Agents often learn value functions to estimate the long-term reward of being in a state or taking an action:

1. State-Value Function: $V: S \rightarrow \mathbb{R}$
   $$ V(s) = \mathbb{E}[G_t | S_t = s] = \mathbb{E} \left[ \sum_{k=0}^{\infty} \gamma^k R_{t+k+1} \Bigg| S_t = s \right] $$

2. Action-Value Function: $Q: S \times A \rightarrow \mathbb{R}$
   $$ Q(s, a) = \mathbb{E}[G_t | S_t = s, A_t = a] = \mathbb{E} \left[ \sum_{k=0}^{\infty} \gamma^k R_{t+k+1} \Bigg| S_t = s, A_t = a \right] $$

The key difference is that the state-value function $V(s)$ estimates the expected return from being in state $s$ and following the current policy thereafter, while the action-value function $Q(s,a)$ estimates the expected return from taking action $a$ in state $s$ and then following the current policy.

Now that we understand these fundamental concepts, let's explore different types of RL agents and how they approach the learning problem.

## 10. Types of RL Agents

RL algorithms can be categorized in several ways. One fundamental distinction is between model-based and model-free methods:

### 10.1 Model-Based Agents

These agents learn a model of their environment:

$$ A_{mb} = (S, A, \hat{R}, \hat{P}, \pi: S \rightarrow A, \gamma, L_{mb}, PA) $$

Where:
- $\hat{R}: S \times A \times S \rightarrow \mathbb{R}$: Estimated Reward Function
- $\hat{P}: S \times A \times S \rightarrow [0, 1]$: Estimated Transition Probability Function
- $PA$: Planning Algorithm

Model-based agents try to learn how the environment works ($\hat{P}$ and $\hat{R}$) and use this knowledge to plan their actions.

### 10.2 Model-Free Agents

These agents learn directly from experience without building an explicit model:

$$ A_{mf} = (S, A, \pi: S \rightarrow A, \gamma, L_{mf}) $$

Model-free agents focus on learning values or policies directly from experience, without trying to model the environment's dynamics.

Another important distinction is between value-based and policy-based methods:

### 10.3 Value-Based Agents

These agents learn a value function (either V or Q) and derive their policy from it:

$$ A_{value} = (S, A, \pi: S \rightarrow A, \gamma, L_{value}, V: S \rightarrow \mathbb{R}) $$
or
$$ A_{value} = (S, A, \pi: S \rightarrow A, \gamma, L_{value}, Q: S \times A \rightarrow \mathbb{R}) $$

### 10.4 Policy-Based Agents

These agents directly learn a policy without necessarily learning a value function:

$$ A_{policy} = (S, A, \pi: S \rightarrow A, \gamma, L_{policy}) $$

### 10.5 Actor-Critic Agents

These combine aspects of both value-based and policy-based methods:

$$ A_{ac} = (S, A, \pi, \gamma, \pi_{actor}: S \rightarrow A, V_{critic}: S \rightarrow \mathbb{R}, L_{ac}) $$

Actor-Critic methods maintain both a policy (the actor) and a value function (the critic), using the critic to update the actor.

Finally, we can distinguish between on-policy and off-policy methods:

### 10.6 On-Policy Agents

These agents learn about the policy they're currently following:

$$ A_{on\_policy} = (S, A, \pi: S \rightarrow A, \gamma, L_{on\_policy}) $$

### 10.7 Off-Policy Agents

These agents can learn about a policy different from the one they're following:

$$ A_{off\_policy} = (S, A, \pi: S \rightarrow A, \gamma, L_{off\_policy}) $$

Understanding these different types of agents and algorithms is crucial for choosing the right approach for a given problem. But how can we improve the performance of these agents?

## 11. Improving Agent Performance

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



























An agent in Reinforcement Learning (RL) is something that
interacts with [[Environment]]
makes decisions to maximize cumulative rewards. 

You can think of it as a tuple:

\[ A = (S, A, \pi, \gamma) \]
- \( S = \{s_1, s_2, s_3, \ldots, s_n\} \): State Space
- \( A = \{a_1, a_2, a_3, \ldots, a_m\} \): Action Space
- \( \pi: S \rightarrow A \) : Policy (learned)
- \( \gamma \): Discount Factor

Question: What is an agent's state space in RL?
Equation:
\[ A = (S, A, \pi, \gamma) \]
- \( S = \{s_1, s_2, s_3, \ldots, s_n\} \): State Space
- \( A = \{a_1, a_2, a_3, \ldots, a_m\} \): Action Space
- \( \pi: S \rightarrow A \) : Policy (learned)
- \( \gamma \): Discount Factor

Question: What is an agent's action space in RL?
Equation:
\[ A = (S, A, \pi, \gamma) \]
- \( S = \{s_1, s_2, s_3, \ldots, s_n\} \): State Space
- \( A = \{a_1, a_2, a_3, \ldots, a_m\} \): Action Space
- \( \pi: S \rightarrow A \) : Policy (learned)
- \( \gamma \): Discount Factor

Question: What is an agent's policy in RL?
Equation:
\[ A = (S, A, \pi: S \rightarrow A, \gamma) \]
- \( S = \{s_1, s_2, s_3, \ldots, s_n\} \): State Space
- \( A = \{a_1, a_2, a_3, \ldots, a_m\} \): Action Space
- \( \pi: S \rightarrow A \) : Policy (learned)
- \( \gamma \): Discount Factor

For deterministic policies:
\[ a_t = \mu(s_t) \]

For stochastic policies:
\[ a_t \sim \pi(\cdot | s_t) \]

Question: What does an agent's learning algorithm do in RL?
Equation:
\[ A = (S, A, \pi: S \rightarrow A, \gamma, L) \]
- \( S = \{s_1, s_2, s_3, \ldots, s_n\} \): State Space
- \( A = \{a_1, a_2, a_3, \ldots, a_m\} \): Action Space
- \( \pi: S \rightarrow A \) : Policy (learned)
- \( \gamma \): Discount Factor
- \( L \): Learning Algorithm

For example, in Q-learning, the update rule is:
\[ Q(s, a) \leftarrow Q(s, a) + \alpha [R_{t+1} + \gamma \max_{a'} Q(S_{t+1}, a') - Q(s, a)] \]
where:
- \(Q(s, a)\) is the action-value function.
- \(\alpha\) is the learning rate.
- \(R_{t+1}\) is the reward received after taking action \(a\) in state \(s\).
- \(\gamma\) is the discount factor.
- \(S_{t+1}\) is the next state.
- \(a'\) is the next action.

Question: What is an agent's reward function in RL?
Equation:
\[ A = (S, A, R: S \times A \times S \rightarrow \mathbb{R}, \pi: S \rightarrow A, \gamma) \]
- \( S = \{s_1, s_2, s_3, \ldots, s_n\} \): State Space
- \( A = \{a_1, a_2, a_3, \ldots, a_m\} \): Action Space
- \( R: S \times A \times S \rightarrow \mathbb{R} \): Reward Function
- \( \pi: S \rightarrow A \) : Policy (learned)
- \( \gamma \): Discount Factor

The reward function can be defined as:
\[ r_t = R(s_t, a_t, s_{t+1}) \]

Question: What is a state-value based agent in RL?
Equation:
\[ A_{state\_value} = (S, A, \pi: S \rightarrow A, \gamma, L_{sv}, V: S \rightarrow \mathbb{R}) \]
- \( S = \{s_1, s_2, s_3, \ldots, s_n\} \): State Space
- \( A = \{a_1, a_2, a_3, \ldots, a_m\} \): Action Space
- \( \pi: S \rightarrow A \) : Policy (learned)
- \( \gamma \): Discount Factor
- \( L_{sv} \): State-Value Learning Algorithm
- \( V: S \rightarrow \mathbb{R} \): State-Value Function (learned)

The state-value function \(V(s)\) can be formally defined as:
\[ V(s) = \mathbb{E}[G_t | S_t = s] = \mathbb{E} \left[ \sum_{k=0}^{\infty} \gamma^k R_{t+k+1} \Bigg| S_t = s \right] \]

Question: What is an action-value based agent in RL?
Equation:
\[ A_{action\_value} = (S, A, \pi: S \rightarrow A, \gamma, L_{av}, Q: S \times A \rightarrow \mathbb{R}) \]
- \( S = \{s_1, s_2, s_3, \ldots, s_n\} \): State Space
- \( A = \{a_1, a_2, a_3, \ldots, a_m\} \): Action Space
- \( \pi: S \rightarrow A \) : Policy (learned)
- \( \gamma \): Discount Factor
- \( L_{av} \): Action-Value Learning Algorithm
- \( Q: S \times A \rightarrow \mathbb{R} \): Action-Value Function (learned)

The action-value function \(Q(s, a)\) can be formally defined as:
\[ Q(s, a) = \mathbb{E}[G_t | S_t = s, A_t = a] = \mathbb{E} \left[ \sum_{k=0}^{\infty} \gamma^k R_{t+k+1} \Bigg| S_t = s, A_t = a \right] \]

Question: What is a memory-based agent in RL?
Equation:
\[ A_{memory} = (S, A, \pi: S \rightarrow A, \gamma, L_{memory}, M) \]
- \( S = \{s_1, s_2, s_3, \ldots, s_n\} \): State Space
- \( A = \{a_1, a_2, a_3, \ldots, a_m\} \): Action Space
- \( \pi: S \rightarrow A \) : Policy (learned)
- \( \gamma \): Discount Factor
- \( L_{memory} \): Memory-Based Learning Algorithm
- \( M \): Memory Mechanism (e.g., experience replay, recurrent neural network)

The memory mechanism \(M\) can be used in various ways, such as experience replay in DQN, where the agent stores and samples past experiences:
\[ M = \{(s_t, a_t, r_{t+1}, s_{t+1})\} \]

Question: What is a model-based agent in RL?
Equation:
\[ A_{mb} = (S, A, \hat{R}, \hat{P}, \pi: S \rightarrow A, \gamma, L_{mb}, PA) \]
- \( S = \{s_1, s_2, s_3, \ldots, s_n\} \): State Space
- \( A = \{a_1, a_2, a_3, \ldots, a_m\} \): Action Space
- \( \hat{R}: S \times A \times S \rightarrow \mathbb{R} \): Estimated Reward Function (learned)
- \( \hat{P}: S \times A \times S \rightarrow [0, 1] \): Estimated Transition Probability Function (learned)
- \( \pi: S \rightarrow A \) : Policy (learned)
- \( \gamma \): Discount Factor
- \( L_{mb} \): Model-Based Learning Algorithm
- \( PA \): Planning Algorithm

The model of the environment consists of the transition function \(\hat{P}\) and the reward function \(\hat{R}\):
\[ \hat{P}(s'|s, a) \approx P(s'|s, a) \]
\[ \hat{R}(s, a, s') \approx R(s, a, s') \]

Question:

 What is a model-free agent in RL?
Equation:
For a model-free agent using Q-learning:
\[ Q(s, a) \leftarrow Q(s, a) + \alpha [R_{t+1} + \gamma \max_{a'} Q(S_{t+1}, a') - Q(s, a)] \]
where:
- \(Q(s, a)\) is the action-value function.
- \(\alpha\) is the learning rate.
- \(R_{t+1}\) is the reward received after taking action \(a\) in state \(s\).
- \(\gamma\) is the discount factor.
- \(S_{t+1}\) is the next state.
- \(a'\) is the next action.

Question: What is an on-policy agent in RL?
Equation:
\[ A_{on\_policy} = (S, A, \pi: S \rightarrow A, \gamma, L_{on\_policy}) \]
- \( S = \{s_1, s_2, s_3, \ldots, s_n\} \): State Space
- \( A = \{a_1, a_2, a_3, \ldots, a_m\} \): Action Space
- \( \pi: S \rightarrow A \) : Policy (learned)
- \( \gamma \): Discount Factor
- \( L_{on\_policy} \): On-Policy Learning Algorithm

For example, in the SARSA (State-Action-Reward-State-Action) algorithm:
\[ Q(s, a) \leftarrow Q(s, a) + \alpha [R_{t+1} + \gamma Q(S_{t+1}, A_{t+1}) - Q(s, a)] \]
where:
- \(Q(s, a)\) is the action-value function.
- \(\alpha\) is the learning rate.
- \(R_{t+1}\) is the reward received after taking action \(a\) in state \(s\).
- \(\gamma\) is the discount factor.
- \(S_{t+1}\) is the next state.
- \(A_{t+1}\) is the next action taken according to the current policy \(\pi\).

Question: What is an off-policy agent in RL?
Equation:
\[ A_{off\_policy} = (S, A, \pi: S \rightarrow A, \gamma, L_{off\_policy}) \]
- \( S = \{s_1, s_2, s_3, \ldots, s_n\} \): State Space
- \( A = \{a_1, a_2, a_3, \ldots, a_m\} \): Action Space
- \( \pi: S \rightarrow A \) : Policy (learned)
- \( \gamma \): Discount Factor
- \( L_{off\_policy} \): Off-Policy Learning Algorithm

For example, in Q-learning:
\[ Q(s, a) \leftarrow Q(s, a) + \alpha [R_{t+1} + \gamma \max_{a'} Q(S_{t+1}, a') - Q(s, a)] \]
where:
- \(Q(s, a)\) is the action-value function.
- \(\alpha\) is the learning rate.
- \(R_{t+1}\) is the reward received after taking action \(a\) in state \(s\).
- \(\gamma\) is the discount factor.
- \(S_{t+1}\) is the next state.
- \(a'\) is the action that maximizes \(Q\) in the next state \(S_{t+1}\).

Question: What is an actor-critic agent in RL?
Equation:
\[ A_{ac} = (S, A, \pi, \gamma, \pi_{actor}, V_{critic}, L_{ac}) \]
- \( S = \{s_1, s_2, s_3, \ldots, s_n\} \): State Space
- \( A = \{a_1, a_2, a_3, \ldots, a_m\} \): Action Space
- \( \pi: S \rightarrow A \) : Policy (learned)
- \( \gamma \): Discount Factor
- \( \pi_{actor}: S \rightarrow A\): Actor (Policy Network) (learned)
- \( V_{critic}: S \rightarrow \mathbb{R}\): Critic (Value Function Network) (learned)
- \( L_{ac}\): Actor-Critic Learning Algorithm

In the Actor-Critic method, the update rules for the actor and critic are:

Critic Update (TD Error):
\[ \delta_t = R_{t+1} + \gamma V(S_{t+1}) - V(S_t) \]

Actor Update (Policy Gradient):
\[ \theta \leftarrow \theta + \alpha \delta_t \nabla_{\theta} \log \pi(a|s, \theta) \]
where:
- \(\delta_t\) is the temporal difference (TD) error.
- \(V(s)\) is the state-value function.
- \(\alpha\) is the learning rate.
- \(\theta\) are the parameters of the policy \(\pi\).
- \(\pi(a|s, \theta)\) is the probability of taking action \(a\) in state \(s\) under policy parameters \(\theta\).

Question: What is an online learning agent in RL?
Equation:
\[ A_{online} = (S, A, \pi: S \rightarrow A, \gamma, L_{online}) \]
- \( S = \{s_1, s_2, s_3, \ldots, s_n\} \): State Space
- \( A = \{a_1, a_2, a_3, \ldots, a_m\} \): Action Space
- \( \pi: S \rightarrow A \) : Policy (learned)
- \( \gamma \): Discount Factor
- \( L_{online} \): Online Learning Algorithm

For example, in online Q-learning, the update occurs after each action:
\[ Q(s, a) \leftarrow Q(s, a) + \alpha [r + \gamma \max_{a'} Q(s', a') - Q(s, a)] \]
where \(r\) is the reward received.

Question: What is an offline learning agent in RL?
Equation:
\[ A_{offline} = (S, A, \pi: S \rightarrow A, \gamma, L_{offline}, M) \]
- \( S = \{s_1, s_2, s_3, \ldots, s_n\} \): State Space
- \( A = \{a_1, a_2, a_3, \ldots, a_m\} \): Action Space
- \( \pi: S \rightarrow A \) : Policy (learned)
- \( \gamma \): Discount Factor
- \( L_{offline} \): Offline Learning Algorithm
- \( M \): Memory Mechanism for storing experiences

For example, in offline Q-learning with experience replay, the update occurs using a batch of experiences:
\[ Q(s, a) \leftarrow Q(s, a) + \alpha [r + \gamma \max_{a'} Q(s', a') - Q(s, a)] \]
where the experiences \((s, a, r, s')\) are sampled from memory \(M\).

Question: How do we measure the performance of agents in RL?
Equation:
\[ \text{Performance}(A) = \mathbb{E} \left[ \sum_{t=0}^{T} \gamma^t R_t \right] \]

Equation:
- \( G_t = \sum_{k=0}^{\infty} \gamma^k R_{t+k+1} \): Expected cumulative reward
- \( \gamma \): Discount Factor

Question: How do we measure agent performance in RL (metrics)?
Equation:
\[ G_t = \sum_{t=0}^{T} R_t \]
where \(T\) is the total time horizon.

Question: How do we improve the performance of agents in RL?
Equation:
Example of enhancing a learning algorithm (Double Q-learning):
\[ Q_1(s, a) \leftarrow Q_1(s, a) + \alpha [r + \gamma Q_2(s', \arg\max_{a'} Q_1(s', a')) - Q_1(s, a)] \]
\[ Q_2(s, a) \leftarrow Q_2(s, a) + \alpha [r + \gamma Q_1(s', \arg\max_{a'} Q_2(s', a')) - Q_2(s, a)] \]

Question: How do we improve the learning efficiency of RL agents?
Equation:
Example of prioritized experience replay:
\[ P(i) = \frac{|\delta_i| + \epsilon}{\sum_k (|\delta_k| + \epsilon)} \]
where \(P(i)\) is the probability of sampling experience \(i\), \(\delta_i\) is the TD error of experience \(i\), and \(\epsilon\) is a small constant to ensure all experiences have a non-zero probability of being sampled.

